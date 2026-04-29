const express = require("express");
const orderRouter = express.Router();

const orderController = require("../controllers/order.controller");
const auth = require("../middleware/auth.middleware");

/**
 *@access private
 *@route /orders
 *@description create order
 */
orderRouter.post("/", auth, orderController.createOrder);

/**
 *@access private
 *@route /orders/:id
 *@description get order information using order id
 */
orderRouter.get("/:id", auth, orderController.getOrderById);

module.exports = orderRouter;
