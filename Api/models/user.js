const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userWalletId: {
    type: String
  },
  userBasketIs: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);
