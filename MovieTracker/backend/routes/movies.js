import express from "express";
import { getMovies, createMovie, updateMovie, deleteMovie, searchTMDB } from "../controllers/movieController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Semua route di bawah ini wajib login
router.use(protect);

router.get("/", getMovies);
router.post("/", createMovie);
router.patch("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.get("/search/tmdb", searchTMDB);

export default router;