const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/teacherController");

router.use(auth);

router.get("/", controller.getTeachers);
router.get("/:id", controller.getTeacherById);
router.post("/", controller.createTeacher);
router.put("/:id", controller.updateTeacher);
router.delete("/:id", controller.deleteTeacher);

module.exports = router;
