const express = require("express");

const router = express.Router();

const {
profile,
updateProfile,
getUserProfile
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

router.get(
"/profile",
authMiddleware,
profile
);

router.put(
"/profile",
authMiddleware,
updateProfile
);

router.get(
"/:id",
getUserProfile
);

module.exports = router;    