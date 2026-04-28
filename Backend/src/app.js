const express = require("express");
const multer = require("multer");

const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
// app.use("/products");

module.exports = app;
