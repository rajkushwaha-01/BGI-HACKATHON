const productModel = require("../models/product.model");

const ImageKit = require("imagekit");

async function addProduct(req, res) {
  const { name, category, price, quantity, unit, deliveryRadius } = req.body;
  const farmer = req.user;

  if (!req.file) {
    return res.status(400).json({
      message: "Image is required",
    });
  }

  if (!farmer.location || !farmer.location.lat || !farmer.location.lng) {
    return res.status(400).json({
      message: "Farmer location is required",
    });
  }

  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  });

  const result = await imagekit.upload({
    file: req.file.buffer,
    fileName: req.file.originalname,
    folder: "/demo-single",
  });

  const product = await productModel.create({
    name,
    category,
    price,
    quantity,
    unit,
    images: result.url,
    farmerId: farmer._id,
    location: {
      type: "Point",
      coordinates: [farmer.location.lng, farmer.location.lat], // lng first!
    },
    deliveryRadius,
    isAvailable: true,
  });
  res.status(200).json({
    message: "Product created successfully",
    product,
  });
}

async function getProducts(req, res) {
  const product = await productModel.find();
  res.status(200).json({
    message: "product fetch successfully",
    product,
  });
}

async function getNearbyProducts(req, res) {
  const { lat, lng, radius = 5000 } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({
      message: "Latitude and Longitude required",
    });
  }

  try {
    const products = await productModel.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseInt(radius),
        },
      },
      isAvailable: true,
    });

    res.status(200).json({
      message: "Nearby products fetched",
      products,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = { addProduct, getProducts, getNearbyProducts };
