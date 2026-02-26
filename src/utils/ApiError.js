/**
 * ApiError.js
 * 
 * Custom Error Class
 * 
 * Extends native JavaScript Error object
 * Allows attaching HTTP status code to errors.
 */

class ApiError extends Error {

    /**
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Error message
   */

    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;

        /**
     * Maintains proper stack trace (V8 engines)
     */
    Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ApiError;