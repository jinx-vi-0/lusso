const mongoose = require("mongoose");
const { type } = require("os");
const { boolean } = require("webidl-conversions");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("user", userSchema);
