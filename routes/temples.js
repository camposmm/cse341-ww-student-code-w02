const express = require('express');
const router = express.Router();

// Middleware to validate API key
const apiKeyMiddleware = require('../middleware/apiKey');

// Temple controller
const templeController = require('../controllers/templeController');

// Apply API key middleware to all routes under /api/temples
router.use(apiKeyMiddleware);

// GET /api/temples
router.get('/', templeController.getAllTemples);

// You can add more routes below as needed:
// e.g., router.post('/', templeController.createTemple);

module.exports = router;