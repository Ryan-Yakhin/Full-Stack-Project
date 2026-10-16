const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getStudentSummary } = require("../controllers/studentReportController");

router.use(auth);

router.get("/studentreports", getStudentSummary);

module.exports = router;
