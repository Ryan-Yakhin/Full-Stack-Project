const Student = require("../models/Student");

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate("classId", "name")
      .sort({ name: 1 });

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate("classId", "name");

    if (!student) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, nis, classId } = req.body;

    if (!name || !nis || !classId) {
      return res.status(400).json({
        message: "Nama, NIS, dan kelas wajib diisi",
      });
    }

    const student = await Student.create({
      name,
      nis,
      classId,
    });

    const result = await student.populate("classId", "name");

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { name, nis, classId } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, nis, classId },
      { new: true, runValidators: true }
    ).populate("classId", "name");

    if (!student) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }

    res.json({ message: "Siswa berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
