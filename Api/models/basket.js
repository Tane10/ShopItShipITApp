const mongoose = require("mongoose");
const ItemsSchema = require("./item");

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const basketSchema = new Schema({
  basketItems:{
    itemId: String,
    itemName: String,
    itemPrice: Number,
    default: {}
  },
  totalPrice: {
    type: Number,
    required: true
  }
},
{ minimize: false });

module.exports = mongoose.model("Basket", basketSchema);
