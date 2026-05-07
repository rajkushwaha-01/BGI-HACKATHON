const express = require("express");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");
const orderRouter = require("./routes/order.routes");
const deliveryRoutes = require("./routes/delivery.route");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/api/delivery", deliveryRoutes);
module.exports = app;
