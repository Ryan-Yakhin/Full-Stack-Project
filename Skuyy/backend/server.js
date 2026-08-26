require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://full-stack-project-zr3y.vercel.app"
];

app.use(
  cors(
    {
      origin(origin, callback) {
        const isVercelPreview = /^https:\/\/full-stack-project-zr3y(?:-[a-z0-9-]+)?\.vercel\.app$/i.test(origin || "");

        if (!origin || allowedOrigins.includes(origin) || isVercelPreview) {
          return callback(null, true);
        }

        return callback(new Error("Origin not allowed by CORS"));
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"] 
    }
  )
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      serverTime: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.use((err, req, res, next)=>{
    console.error(err);

    res.status(500).json({
        message:"Internal Server Error"
    });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;