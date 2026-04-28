const express = require('express')
const authController = require('../controllers/auth.controller')

const authRouter = express.Router();

/**
 * @access public
 * @route post auth/signup
 * @description register user
 */

authRouter.post("/signup" , authController.signup )

/**
 * @access public
 * @route post auth/signup
 * @description login user
 */

// authRouter.post("/login" )


module.exports = authRouter
