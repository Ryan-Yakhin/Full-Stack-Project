import express from "express";
import {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByMovie,
  getHomeTimeline,
  getUserReviews,
} from "../controllers/reviewController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.get("/timeline", getHomeTimeline);
router.get("/user/:userId", getUserReviews);

// Protected routes (perlu login)
router.use(protect);
router.post("/", createReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);
router.get("/movie/:movieEntryId", getReviewsByMovie);

export default router;
