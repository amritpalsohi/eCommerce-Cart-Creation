/**
 * cart.controller.js
 * 
 * Controller Layer:
 * - Handles HTTP request & response
 * - Extracts input from request
 * - Calls service layer
 * - Returns formatted response
 * - Delegates errors to global handler
 */

const cartService = require('../services/cart.service');

/**
 * Create Cart
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.createCart = (req, res, next) => {
    try{
        /**
        * Call business logic layer to calculate total price
        */
        const result = cartService.calculateTotal(req.body.items);

        /**
        * Return successful response
        */
        res.status(200).json(result);
    } catch (error){
        /**
        * Forward error to centralized error handler
        */
        next(error)
    }
};