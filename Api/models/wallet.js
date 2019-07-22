const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walletSchema = new Schema({
  walletId: {
    type: String,
    required: true
  },
  balence: {
    type: Float32Array,
    required: true
  }
});

module.exports = mongoose.model("Wallet", walletSchema);
