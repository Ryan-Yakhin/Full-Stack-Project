const express = require("express");

const router = express.Router();

const {
  createPost,
  getUserPosts
} = require("../controllers/postController");

const authMiddleware =
require("../middleware/authMiddleware");

router.post(
  "/",
  authMiddleware,
  createPost
);

router.get(
  "/user",
  authMiddleware,
  getUserPosts
);

module.exports = router;