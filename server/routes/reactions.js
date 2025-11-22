const express = require("express");
const router = express.Router();

const {
  addReaction,
  getUserReaction,
  getAllReactions,
} = require("../controllers/reactionController");

router.post("/", addReaction);
router.get("/user", getUserReaction);
router.get("/all", getAllReactions);

router.get("/test", (req, res) => {
  res.send("Reactions route OK");
});

module.exports = router;
