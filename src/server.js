/**
 * server.js
 * 
 * This file is responsible for starting the HTTP server.
 * 
 * It imports the Express app from app.js and starts listening
 * on the configured port.
 * 
 */

const app = require('./app');

const PORT = 3000;

/**
 * Start Express server
 */
app.listen(PORT, () => {
    console.log(`Cart Service is running on ${PORT}`);
});