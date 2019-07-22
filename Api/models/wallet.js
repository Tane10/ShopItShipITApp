const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walletSchema = new Schema({
  balance: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Wallet", walletSchema);
