const mongoose = require("mongoose");
const ItemsSchema = require("./item");

const Schema = mongoose.Schema;

const basketSchema = new Schema({
  basketId: {
    type: String,
    required: true
  },
  basketItems: [ItemsSchema],

  totalPrice: {
    type: Float32Array,
    required: true
  }
});

module.exports = mongoose.model("Basket", basketSchema);
