const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getSummary } = require("../controllers/reportController");

router.use(auth);

router.get("/summary", getSummary);

module.exports = router;
