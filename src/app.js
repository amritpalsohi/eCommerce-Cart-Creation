/**
 * app.js
 * 
 * This file creates and configures the Express application.
 * 
 * Responsibilities:
 * - Initialize Express
 * - Register global middlewares
 * - Register application routes
 * - Register centralized error handler
 * 
 */

const express = require('express');
const cartRoutes = require('./routes/cart.routes');
const errorMiddleware = require('./middlewares/error.middleware');
const e = require('express');

const app = express();

/**
 * Built-in middleware to parse incoming JSON request bodies.
 */
app.use(express.json());

/**
 * CORS middleware to allow requests from different origins
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

/**
 * Mount Cart routes under /cart path.
 * Example endpoint: POST /cart
 */
app.use('/cart', cartRoutes);

/**
 * Global Error Handling Middleware
 */
app.use(errorMiddleware);

module.exports = app;