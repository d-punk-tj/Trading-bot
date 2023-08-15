const express = require('express');
const etherRoutes = require('./routes/etherRoutes'); // Import the Ether routes
const cctxRoutes = require('./routes/cctxRoutes'); // Import the CCTX routes
const db = require('./src/configs/db');
require('dotenv').config(); // Load environment variables


const app = express();
const port = process.env.PORT || 3000;

// Use the imported route files
app.use('/ether', etherRoutes);
app.use('/cctx', cctxRoutes);

// Routes for CCTX
app.get('/cctx/tradableCoins', cctxController.getTradableCoinsList);
app.get('/cctx/averagePrices', cctxController.getCoinsAveragePrices);

// Serve Swagger documentation using Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
