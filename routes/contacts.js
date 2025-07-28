const express = require('express');
const router = express.Router();
const jwtCheck = require('../middleware/auth');
const controller = require('../controllers/contacts');

// Public routes
router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);

// Protected routes
router.post('/', jwtCheck, controller.createContact);
router.put('/:id', jwtCheck, controller.updateContact);
router.delete('/:id', jwtCheck, controller.deleteContact);

module.exports = router;