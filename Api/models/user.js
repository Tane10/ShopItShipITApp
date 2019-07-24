const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    userWallet: {
      type: Number,
      default: 0.0
    },
    userBasket: {
      basketItems: {
        itemId: String,
        itemName: String,
        itemPrice: Number
      },
      default: {}
    },
    totalPrice: {
      type: Number,
      default: 0.0
    }
  },
  { minimize: false }
);

module.exports = mongoose.model("User", userSchema);
