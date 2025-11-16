const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  coins: {
    type: Number,
    default: 0,
  },
  history: [
    {
      amount: Number,
      type: { type: String }, // "replenish" | "purchase"
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Wallet", WalletSchema);
