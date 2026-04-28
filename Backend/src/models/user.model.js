const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["farmer", "consumer", "delivery"],
      required: true,
    },

    location: {
      lat: Number,
      lng: Number,
      address: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;