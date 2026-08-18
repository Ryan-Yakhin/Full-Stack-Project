import express from "express";
import { createNote, getAllNotes, getNoteById, updateNote, deleteNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);

export default router;