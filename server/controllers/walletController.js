const User = require("../models/User");
const Wallet = require("../models/Wallet");

exports.addCoins = async (req, res) => {
  try {
    const { username, amount } = req.body;

    const user = await User.findOne({ username }).populate("wallet");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Создаём кошелёк, если его нет
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
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
