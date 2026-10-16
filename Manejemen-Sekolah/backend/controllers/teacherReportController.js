const ClassModel = require("../models/Class");
const Teacher = require("../models/Teacher");

exports.getTeacherSummary = async (req, res) => {
  try {
    const classes = await ClassModel.find()
      .sort({ name: 1 })
      .lean();

    const result = await Promise.all(
      classes.map(async (item) => {
        const [teachers] = await Promise.all([
          Teacher.find({ classId: item._id })
            .select("name nip")
            .sort({ name: 1 })
            .lean(),
        ]);

        return {
          class: item,
          teachers,
        };
      })
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
