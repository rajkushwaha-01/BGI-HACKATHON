const productModel = require("../models/product.model");

async function addProduct(req, res) {
  const { name, category, price, quantity, unit, images, deliveryRadius } =
    req.body;
  const farmer = req.user;

  if (!farmer.location || !farmer.location.lat || !farmer.location.lng) {
    return res.status(400).json({
      message: "Farmer location is required",
    });
  }

  const product = await productModel.create({
    name,
    category,
    price,
    quantity,
    unit,
    images,
    farmerId: farmer._id,
    location: {
      lat: farmer.location.lat,
      lng: farmer.location.lng,
    },
    deliveryRadius,
    isAvailable: true,
  });
  res.status(200).json({
    message: "Product created successfully",
    product,
  });
}

async function getProducts(req , res) {
  const product = await productModel.find()
  res.status(200).json({
    message:"product fetch successfully",
    product
  })
}

module.exports = { addProduct , getProducts };
