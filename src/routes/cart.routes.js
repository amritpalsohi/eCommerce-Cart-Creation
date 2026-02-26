/**
 * cart.routes.js
 * 
 * Defines REST endpoints related to Cart operations.
 * 
 * This layer should:
 * - Define routes
 * - Attach middlewares
 * - Delegate request handling to controllers
 * 
 */

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const validate = require('../middlewares/validate.middleware');

/**
 * POST /cart
 * 
 * Middleware Flow:
 * 1. validate -> Validates request body
 * 2. cartController.createCart -> Handles business logic
 */
router.post('/', validate, cartController.createCart);

module.exports = router;