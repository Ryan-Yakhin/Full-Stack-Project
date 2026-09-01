import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Tidak ada token, akses ditolak" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    
    // Fetch user untuk mendapatkan nama
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User tidak ditemukan" });
    }
    req.userName = user.name;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token tidak valid" });
  }
};