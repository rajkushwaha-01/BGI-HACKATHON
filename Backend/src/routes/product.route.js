const express = require('express')
const productController = require('../controllers/product.controller')

const productRouter = express.Router();

/**
 * @route /products/add
 * @access private
 * @description only farmer can add a product.
 */
// productRouter.post('/add'  )

/**
 * @route /products
 * @access public
 * @description show product on desboard
 */
// productRouter.get('/')


/**
 * @router /products/nearby
 * @access private 
 * @description login user can use this route
 */

// productRouter.get('/products/nearby')


module.exports = productRouter