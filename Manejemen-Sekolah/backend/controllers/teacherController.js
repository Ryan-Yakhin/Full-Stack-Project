const Teacher = require("../models/Teacher");

exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find()
      .populate("classId", "name")
      .sort({ name: 1 });

    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id)
      .populate("classId", "name");

    if (!teacher) {
      return res.status(404).json({ message: "Guru tidak ditemukan" });
    }

    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTeacher = async (req, res) => {
  try {
    const { name, nip, classId } = req.body;

    if (!name || !nip || !classId) {
      return res.status(400).json({
        message: "Nama, NIP, dan kelas wajib diisi",
      });
    }

    const teacher = await Teacher.create({
      name,
      nip,
      classId,
    });

    const result = await teacher.populate("classId", "name");

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTeacher = async (req, res) => {
  try {
    const { name, nip, classId } = req.body;

    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { name, nip, classId },
      { new: true, runValidators: true }
    ).populate("classId", "name");

    if (!teacher) {
      return res.status(404).json({ message: "Guru tidak ditemukan" });
    }

    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);

    if (!teacher) {
      return res.status(404).json({ message: "Guru tidak ditemukan" });
    }

    res.json({ message: "Guru berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
