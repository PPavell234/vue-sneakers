const User = require("../models/user"); // Модель
const Wallet = require("../models/Wallet");

exports.addCoins = async (req, res) => {
  try {
    const { username, amount } = req.body;

    console.log("Received data:", { username, amount }); // Логируем полученные данные

    // Ищем пользователя по email
    const user = await User.findOne({ email: username }).populate("wallet");

    if (!user) {
      console.log("User not found for:", username); // Логируем, если пользователя нет
      return res.status(404).json({ message: "User not found" });
    }

    let wallet = await Wallet.findOne({ owner: user._id });

    if (!wallet) {
      wallet = await Wallet.create({
        owner: user._id,
        coins: 0,
        history: [],
      });
    }

    wallet.coins += amount;
    wallet.history.push({
      amount,
      type: "replenish",
    });

    await wallet.save();

    res.json({
      message: "Coins added",
      coins: wallet.coins,
      history: wallet.history,
    });
  } catch (err) {
    console.log("Error:", err); // Логируем ошибку
    res.status(500).json({ message: "Server error" });
  }
};
exports.getWallet = async (req, res) => {
  try {
    const { username } = req.query;

    // Находим пользователя
    const user = await User.findOne({ email: username });

    if (!user) {
      return res.json({ coins: 0 });
    }

    // Находим кошелек
    let wallet = await Wallet.findOne({ owner: user._id });

    // Если кошелька нет — создаем
    if (!wallet) {
      return res.json({ coins: 0 });
    }

    res.json({
      coins: wallet.coins,
    });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
