import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    movieEntryId: { type: mongoose.Schema.Types.ObjectId, ref: "MovieEntry", required: true },
    tmdbId: { type: Number, required: true }, // ID dari TMDB untuk tracking film
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true }, // Simpan nama untuk efisiensi
    rating: { type: Number, required: true, min: 1, max: 5 },
    reviewText: { type: String, required: true },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
