import Review from "../models/Review.js";
import MovieEntry from "../models/MovieEntry.js";

export const createReview = async (req, res) => {
  try {
    const { movieEntryId, tmdbId, rating, reviewText } = req.body;

    // Cek apakah user sudah pernah review film ini
    const existingReview = await Review.findOne({ movieEntryId, userId: req.userId });
    if (existingReview) {
      return res.status(400).json({ message: "Anda sudah memberikan review untuk film ini" });
    }

    // Verifikasi bahwa movie entry milik user dan status completed
    const movieEntry = await MovieEntry.findOne({ _id: movieEntryId, userId: req.userId });
    if (!movieEntry || movieEntry.status !== "completed") {
      return res.status(403).json({ message: "Hanya film yang sudah completed dapat di-review" });
    }

    const review = await Review.create({
      movieEntryId,
      tmdbId,
      userId: req.userId,
      userName: req.userName,
      rating,
      reviewText,
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { rating, reviewText } = req.body;

    const review = await Review.findOne({ _id: req.params.id, userId: req.userId });
    if (!review) {
      return res.status(404).json({ message: "Review tidak ditemukan" });
    }

    review.rating = rating || review.rating;
    review.reviewText = reviewText || review.reviewText;
    await review.save();

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!review) {
      return res.status(404).json({ message: "Review tidak ditemukan" });
    }
    res.json({ message: "Review dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getReviewsByMovie = async (req, res) => {
  try {
    const { movieEntryId } = req.params;
    const reviews = await Review.find({ movieEntryId })
      .populate("userId", "name email")
      .sort({ createdAt: -1 });
    
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getHomeTimeline = async (req, res) => {
  try {
    // Ambil semua movie yang completed beserta reviews
    const completedMovies = await MovieEntry.find({ status: "completed" })
      .populate("userId", "name email")
      .sort({ dateCompleted: -1 });

    // Untuk setiap movie, ambil reviews
    const timelineData = await Promise.all(
      completedMovies.map(async (movie) => {
        const reviews = await Review.find({ movieEntryId: movie._id })
          .sort({ createdAt: -1 });
        
        const avgRating = reviews.length > 0 
          ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
          : 0;

        return {
          movieEntry: movie,
          reviews,
          totalReviews: reviews.length,
          averageRating: avgRating,
        };
      })
    );

    res.json(timelineData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserReviews = async (req, res) => {
  try {
    const { userId } = req.params;
    const reviews = await Review.find({ userId })
      .populate("movieEntryId")
      .sort({ createdAt: -1 });
    
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
