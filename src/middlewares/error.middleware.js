/**
 * error.middleware.js
 * 
 * Centralized Error Handler
 * 
 * This middleware:
 * - Catches all errors passed using next(error)
 * - Standardizes error response format
 * - Prevents duplicate error handling logic in controllers
 */

module.exports = (err, req, res, next) => {

    /**
   * If error has custom status code use it,
   * otherwise default to 500 (Internal Server Error)
   */
    const status = err.statusCode || 500;
    res.status(status).json({
        message: err.message || 'Internal Server Error'
    });
};