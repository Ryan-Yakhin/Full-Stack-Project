import mongoose from "mongoose";

const movieEntrySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tmdbId: { type: Number },
    title: { type: String, required: true },
    posterUrl: { type: String },
    genres: [{ type: String }],
    status: {
      type: String,
      enum: ["watchlist", "watching", "completed"],
      default: "watchlist",
    },
    rating: { type: Number, min: 1, max: 5 },
    review: { type: String },
    dateCompleted: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("MovieEntry", movieEntrySchema);