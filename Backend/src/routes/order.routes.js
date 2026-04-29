const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const auth = require("../middleware/auth.middleware");

router.post("/orders", auth, orderController.createOrder);
router.get("/orders/:id", auth, orderController.getOrderById);

module.exports = router;