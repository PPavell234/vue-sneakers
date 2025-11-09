require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Импорт роутов
const postRoutes = require("./routes/routes");
const authRoutes = require("./routes/auth");

const app = express();
const port = process.env.PORT || 5000;

// --- Middleware ---
app.use(
  cors({
    origin: "http://localhost:5173", // адрес твоего фронтенда
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Раздача изображений ---
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- Подключение к MongoDB ---
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Роуты ---
app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes); // 👈 добавь это!

// --- Тестовый маршрут ---
app.get("/", (req, res) => {
  res.json({ message: "Server is working 🚀" });
});

// --- Запуск сервера ---
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
