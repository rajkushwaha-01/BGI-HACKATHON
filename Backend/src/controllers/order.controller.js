const Order = require("../models/order.model");
const Product = require("../models/product.model");

async function createOrder(req, res) {
  const { products, deliveryLocation } = req.body;
  const user = req.user;

  let totalAmount = 0;
  let farmerId = null;

  const orderProducts = [];

  for (let item of products) {
    const product = await Product.findById(item.productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    farmerId = product.farmerId;

    totalAmount += product.price * item.quantity;

    orderProducts.push({
      productId: product._id,
      name: product.name,
      quantity: item.quantity,
      price: product.price,
    });
  }

  const order = await Order.create({
    consumerId: user._id,
    farmerId,
    products: orderProducts,
    totalAmount,
    deliveryLocation,
  });

  res.status(201).json(order);
}

async function getOrderById(req, res) {
  const order = await Order.findById(req.params.id)
    .populate("consumerId", "name phone")
    .populate("farmerId", "name phone")
    .populate("deliveryBoyId", "name phone");

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
}
