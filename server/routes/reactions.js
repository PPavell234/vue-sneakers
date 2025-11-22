const express = require("express");
const router = express.Router();

const { addReaction } = require("../controllers/reactionController");

router.post("/", addReaction);

router.get("/test", (req, res) => {
  res.send("Reactions route OK");
});

module.exports = router;
