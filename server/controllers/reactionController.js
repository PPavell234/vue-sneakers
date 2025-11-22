const User = require("../models/user");
const Reaction = require("../models/Reaction");

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

    // Сохраняем реакцию
    const newReaction = await Reaction.create({
      owner: user._id,
      reaction: reaction,
    });

    res.json({
      success: true,
      message: "Reaction saved successfully",
      reaction: newReaction,
    });
  } catch (error) {
    console.log("Reaction error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
