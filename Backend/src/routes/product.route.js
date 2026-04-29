const express = require("express");
const multer = require("multer");
const productController = require("../controllers/product.controller");
const farmerauthMiddeleware = require("../middleware/farmerauth.middleware");

const productRouter = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

/**
 * @route /products/add
 * @access private
 * @description only farmer can add a product.
 */
productRouter.post(
  "/add",
  farmerauthMiddeleware,
  upload.single("image"),
  productController.addProduct,
);

/**
 * @route /products
 * @access public
 * @description show product on desboard
 */
productRouter.get("/", productController.getProducts);

/**
 * @router /products/nearby
 * @access private
 * @description login user can use this route
 */

productRouter.get("/nearby", productController.getNearbyProducts);

module.exports = productRouter;
