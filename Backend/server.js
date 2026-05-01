require('dotenv').config()
const express=require("express");
const app = require('./src/app')
app.use(express.json());
const connectDB = require('./src/config/db')
const deliveryRoutes=require("./routes/delivery.routes");
app.use("/api/delivery",deliveryRoutes);

connectDB();


app.listen(3000 , ()=>{
    console.log("PORT is running on 3000")
});