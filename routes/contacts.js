const express = require('express');
const router = express.Router();

const {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contacts');

// GET all contacts
router.get('/', getAll);

// GET contact by ID
router.get('/:id', getSingle);

// POST create new contact
router.post('/', createContact);

// PUT update contact by ID
router.put('/:id', updateContact);

// DELETE contact by ID
router.delete('/:id', deleteContact);

module.exports = router;