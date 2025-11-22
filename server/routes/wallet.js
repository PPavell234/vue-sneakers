const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Wallet = require("../models/Wallet");

const { addCoins } = require("../controllers/walletController");

// Пополнение монет
router.post("/add-coins", addCoins);

// Получение текущего баланса через get
router.get("/get", async (req, res) => {
  try {
    const { username } = req.query;

    const user = await User.findOne({ email: username });
    if (!user) return res.json({ coins: 0 });

    // Ищем кошелёк по ПРАВИЛЬНОМУ ПОЛЮ!
    let wallet = await Wallet.findOne({ owner: user._id });

    // Если кошелька нет — создаём нулевой
    if (!wallet) {
      wallet = await Wallet.create({
        owner: user._id,
        coins: 0,
        history: [],
      });
    }

    res.json({ coins: wallet.coins });
  } catch (err) {
    console.log("Wallet GET error:", err);
    res.status(500).json({ coins: 0 });
  }
});

module.exports = router;
