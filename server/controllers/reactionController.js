const User = require("../models/user");
const Reaction = require("../models/Reaction");

// --- Добавление или обновление реакции ---
exports.addReaction = async (req, res) => {
  try {
    const { username, reaction } = req.body;

    const user = await User.findOne({ email: username });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Ищем реакцию пользователя
    let existingReaction = await Reaction.findOne({ owner: user._id });

    if (existingReaction) {
      existingReaction.reaction = reaction;
      await existingReaction.save();

      return res.json({
        success: true,
        message: "Reaction updated",
        reaction: existingReaction,
      });
    }

    const newReaction = await Reaction.create({
      owner: user._id,
      reaction: reaction,
    });

    res.json({
      success: true,
      message: "Reaction created",
      reaction: newReaction,
    });
  } catch (error) {
    console.log("Reaction error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// --- Получить реакцию ТЕКУЩЕГО пользователя ---
//Даже если он перезайдет
exports.getUserReaction = async (req, res) => {
  const { username } = req.query;

  const user = await User.findOne({ email: username });
  if (!user) return res.json({ reaction: null });

  const reaction = await Reaction.findOne({ owner: user._id });

  res.json({ reaction });
};

// --- Получить ВСЕ реакции всех пользователей ---
//Сохроняем подсвтку рекциии
exports.getAllReactions = async (req, res) => {
  try {
    const { username } = req.query;

    const user = await User.findOne({ email: username });

    const reactions = await Reaction.find();

    let myReaction = null;

    if (user) {
      myReaction = await Reaction.findOne({ owner: user._id });
    }

    res.json({
      reactions,
      myReaction,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
