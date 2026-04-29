const express = require('express')
const productController = require('../controllers/product.controller')
const farmerauthMiddeleware = require('../middleware/farmerauth.middleware')

const productRouter = express.Router();

/**
 * @route /products/add
 * @access private
 * @description only farmer can add a product.
 */
productRouter.post('/add' , farmerauthMiddeleware , productController.addProduct  )

/**
 * @route /products
 * @access public
 * @description show product on desboard
 */
productRouter.get('/' , productController.getProducts)


/**
 * @router /products/nearby
 * @access private 
 * @description login user can use this route
 */

productRouter.get('/nearby', productController.getNearbyProducts)


module.exports = productRouter