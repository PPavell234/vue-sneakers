import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
    default: null,
  },
});

// Фикс OverwriteModelError
export default mongoose.models.user || mongoose.model("user", userSchema);
