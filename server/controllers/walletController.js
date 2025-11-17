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

    if (!user.wallet) {
      const wallet = await Wallet.create({
        owner: user._id,
        coins: 0,
      });

      user.wallet = wallet._id;
      await user.save();
    }

    const wallet = await Wallet.findById(user.wallet);

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
