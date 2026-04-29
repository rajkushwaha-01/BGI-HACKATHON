const express = require("express");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");

const app = express();

app.use(express.json());
app.use(cookieParser());




app.use("/auth", authRouter);
app.use("/products" , productRouter);

module.exports = app;
