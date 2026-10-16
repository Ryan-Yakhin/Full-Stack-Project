const ClassModel = require("../models/Class");

exports.getClasses = async (req, res) => {
  try {
    const classes = await ClassModel.find().sort({ name: 1 });
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const item = await ClassModel.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Kelas tidak ditemukan" });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createClass = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Nama kelas wajib diisi" });
    }

    const item = await ClassModel.create({
      name,
      description,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateClass = async (req, res) => {
  try {
    const { name, description } = req.body;

    const item = await ClassModel.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true, runValidators: true }
    );

    if (!item) {
      return res.status(404).json({ message: "Kelas tidak ditemukan" });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteClass = async (req, res) => {
  try {
    const item = await ClassModel.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Kelas tidak ditemukan" });
    }

    res.json({ message: "Kelas berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
