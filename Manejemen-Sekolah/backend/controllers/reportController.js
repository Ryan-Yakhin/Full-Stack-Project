const ClassModel = require("../models/Class");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

exports.getSummary = async (req, res) => {
  try {
    const classes = await ClassModel.find()
      .sort({ name: 1 })
      .lean();

    const result = await Promise.all(
      classes.map(async (item) => {
        const [students, teachers] = await Promise.all([
          Student.find({ classId: item._id })
            .select("name nis")
            .sort({ name: 1 })
            .lean(),

          Teacher.find({ classId: item._id })
            .select("name nip")
            .sort({ name: 1 })
            .lean(),
        ]);

        return {
          class: item,
          students,
          teachers,
        };
      })
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
