const express = require('express');
const router = express.Router();
const jwtCheck = require('../middleware/auth');
const controller = require('../controllers/templeController');

// Public routes
router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);

// Protected routes
router.post('/', jwtCheck, controller.createTemple);
router.put('/:id', jwtCheck, controller.updateTemple);
router.delete('/:id', jwtCheck, controller.deleteTemple);

module.exports = router;
