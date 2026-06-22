const express = require("express");

const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost,
  getUserPosts,
  getAllPosts,
  getPostById
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

router.get(
  "/",
  getAllPosts
);

router.put(
"/:id",
authMiddleware,
updatePost
);

router.delete(
"/:id",
authMiddleware,
deletePost
);

router.get(
  "/:id",
  authMiddleware,
  getPostById
);

module.exports = router;