/**
 * cart.service.js
 * 
 * Service Layer:
 * - Contains core business logic
 * - No HTTP handling
 * - No response formatting
 * - Pure logic only
 */

const ApiError = require('../utils/ApiError');

/**
 * Calculates total price of items in cart.
 * 
 * @param {Array} items - Array of cart items
 * @returns {Object} - Cart response containing items and totalPrice
 * 
 * Business Rule:
 * totalPrice = sum(unitPrice × quantity)
 */
exports.calculateTotal = (items) => {

    /**
   * Validate items array
   */
    if(!Array.isArray(items) || items.length === 0){
        throw new ApiError(400, 'Items cannot be empty');
    }

    let totalPrice =0;

    for(const item of items){

        /**
     * Validate item structure
     */
        if(!item.id || typeof item.unitPrice !== 'number' || typeof item.quantity !== 'number'){
            throw new ApiError(400, 'Invalid item input');
        }

        /**
     * Validate price and quantity rules
     */
        if(item.unitPrice < 0 || item.quantity <0){
            throw new ApiError(400, 'Invalid item price or quantity');
        }

        /**
     * Calculate total
     */
        totalPrice +=item.unitPrice * item.quantity;
    }

    /**
   * Return formatted response
   */
    return {
        items,
        totalPrice
    };
};