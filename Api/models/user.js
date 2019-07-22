const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  userBasket: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
