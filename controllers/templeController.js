// controllers/templeController.js
const mongoose = require('mongoose');
const Temple = require('../models/temple')(mongoose);

exports.getAllTemples = async (req, res) => {
  try {
    const temples = await Temple.find();
    res.status(200).json(temples);
  } catch (err) {
    console.error('Error fetching temples:', err);
    res.status(500).json({ message: 'Error fetching temples' });
  }
};

exports.getTempleById = async (req, res) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) {
      return res.status(404).json({ message: 'Temple not found' });
    }
    res.status(200).json(temple);
  } catch (err) {
    console.error('Error fetching temple by ID:', err);
    res.status(500).json({ message: 'Error fetching temple' });
  }
};

exports.createTemple = async (req, res) => {
  try {
    const newTemple = new Temple(req.body);
    const saved = await newTemple.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error creating temple:', err);
    res.status(400).json({ message: 'Error creating temple', error: err.message });
  }
};