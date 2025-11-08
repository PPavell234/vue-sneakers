// server/routes/routes.js
const express = require("express");
const router = express.Router();

// Пример маршрута GET
router.get("/", (req, res) => {
  res.json({ message: "🚀 API is working!" });
});

module.exports = router;
