const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getTeacherSummary } = require("../controllers/teacherReportController");

router.use(auth);

router.get("/teacherreports", getTeacherSummary);

module.exports = router;
