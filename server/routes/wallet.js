const express = require("express");
const router = express.Router();
const { addCoins } = require("../controllers/walletController");

router.post("/add-coins", addCoins);

module.exports = router;
