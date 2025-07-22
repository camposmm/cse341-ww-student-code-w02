const express = require('express');
const router = express.Router();
const Temple = require('../models/temple');

// GET all temples
router.get('/', async (req, res) => {
  try {
    const temples = await Temple.find();
    res.status(200).json(temples);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET temple by ID
router.get('/:id', async (req, res) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) return res.status(404).json({ message: 'Temple not found' });
    res.status(200).json(temple);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST new temple
router.post('/', async (req, res) => {
  try {
    const { templeName, location } = req.body;
    if (!templeName || !location) {
      return res.status(400).json({ message: 'templeName and location are required' });
    }
    const temple = new Temple(req.body);
    await temple.save();
    res.status(201).json(temple);
  } catch (err) {
    res.status(500).json({ message: 'Error creating temple' });
  }
});

// PUT update temple
router.put('/:id', async (req, res) => {
  try {
    const { templeName, location } = req.body;
    if (!templeName || !location) {
      return res.status(400).json({ message: 'templeName and location are required' });
    }
    const temple = await Temple.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!temple) return res.status(404).json({ message: 'Temple not found' });
    res.status(200).json(temple);
  } catch (err) {
    res.status(500).json({ message: 'Error updating temple' });
  }
});

// DELETE temple
router.delete('/:id', async (req, res) => {
  try {
    const temple = await Temple.findByIdAndDelete(req.params.id);
    if (!temple) return res.status(404).json({ message: 'Temple not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting temple' });
  }
});

module.exports = router;