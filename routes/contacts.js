const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// GET all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// GET contact by ID
router.get('/:id', async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  contact ? res.json(contact) : res.status(404).send('Contact not found');
});

// POST new contact
router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
});

// PUT update contact
router.put('/:id', async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).send('Contact not found');
});

// DELETE contact
router.delete('/:id', async (req, res) => {
  const deleted = await Contact.findByIdAndDelete(req.params.id);
  deleted ? res.json({ message: 'Deleted successfully' }) : res.status(404).send('Not found');
});

module.exports = router;
