const User = require("../models/user");
const Reaction = require("../models/Reaction");

// --- Добавление реакции ---
exports.addReaction = async (req, res) => {
  try {
    const { username, reaction } = req.body;

    console.log("Received reaction:", { username, reaction });

    // Ищем пользователя по email
    const user = await User.findOne({ email: username });

    if (!user) {
      console.log("User not found:", username);
      return res.status(404).json({ message: "User not found" });
    }

    // Ищем существующую реакцию
    let existingReaction = await Reaction.findOne({ owner: user._id });

    if (existingReaction) {
      // обновляем реакцию
      existingReaction.reaction = reaction;
      await existingReaction.save();

      return res.json({
        success: true,
        message: "Reaction updated",
        reaction: existingReaction,
      });
    }

    // если нет — создаём
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

// --- Получение реакции пользователя ---
exports.getUserReaction = async (req, res) => {
  try {
    const { username } = req.query;

    console.log("Get reaction for:", username);

    // Ищем пользователя
    const user = await User.findOne({ email: username });

    if (!user) {
      return res.json({ reaction: null });
    }

    // Находим реакцию юзера
    const reaction = await Reaction.findOne({ owner: user._id });

    return res.json({ reaction });
  } catch (error) {
    console.log("Get reaction error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
