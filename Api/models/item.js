const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemId: {
    type: String,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  price: {
    type: Float32Array,
    required: true
  }
});

module.exports = mongoose.model("Item", itemSchema);
