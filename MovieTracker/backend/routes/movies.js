import express from "express";
import axios from "axios";
import MovieEntry from "../models/MovieEntry.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Semua route di bawah ini wajib login
router.use(protect);

// GET /api/movies?status=watchlist
router.get("/", async (req, res) => {
  try {
    const filter = { userId: req.userId };
    if (req.query.status) filter.status = req.query.status;

    const movies = await MovieEntry.find(filter).sort({ createdAt: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/movies
router.post("/", async (req, res) => {
  try {
    const movie = await MovieEntry.create({ ...req.body, userId: req.userId });
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /api/movies/:id
router.patch("/:id", async (req, res) => {
  try {
    const movie = await MovieEntry.findOne({ _id: req.params.id, userId: req.userId });
    if (!movie) return res.status(404).json({ message: "Entry tidak ditemukan" });

    Object.assign(movie, req.body);
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/movies/:id
router.delete("/:id", async (req, res) => {
  try {
    const movie = await MovieEntry.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!movie) return res.status(404).json({ message: "Entry tidak ditemukan" });
    res.json({ message: "Terhapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/movies/search?q=inception  -> proxy ke TMDB
router.get("/search/tmdb", async (req, res) => {
  try {
    const { q } = req.query;
    const { data } = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: { api_key: process.env.TMDB_API_KEY, query: q, language: "id-ID" },
    });
    res.json(data.results);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data dari TMDB" });
  }
});

export default router;