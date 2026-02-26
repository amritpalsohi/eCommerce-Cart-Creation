/**
 * validate.middleware.js
 * 
 * Request Validation Middleware
 * 
 * Purpose:
 * - Validate presence of required fields
 * - Prevent controller from executing if input invalid
 */

const ApiError = require('../utils/ApiError');

/**
 * Validates incoming cart request body.
 */
module.exports = (req, res, next) => {

    /**
   * Ensure "items" field exists in request body
   */
    if(!req.body.items){
        return next(new ApiError(400, 'Items field is required'));
    }
    next();
};