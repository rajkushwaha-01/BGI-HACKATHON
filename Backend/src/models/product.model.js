const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["vegetable", "fruit", "grain", "dairy", "other"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    unit: {
      type: String,
      default: "kg",
    },

    images: [String],

    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        //lng , lat
        type: [Number],
        required: true,
        validate: {
          validator: (val) => val.length === 2,
          message: "Coordinates must be [lng, lat]",
        },
      },
    },

    deliveryRadius: {
      type: Number,
      required: true,
      default: 5000,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

productSchema.index({ location: "2dsphere" });

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
