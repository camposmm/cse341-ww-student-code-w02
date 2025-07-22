const Temple = require('../models/temple');

const getAll = async (req, res) => {
  try {
    const temples = await Temple.find();
    res.status(200).json(temples);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch temples', error: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) return res.status(404).json({ message: 'Temple not found' });
    res.status(200).json(temple);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving temple', error: err.message });
  }
};

const createTemple = async (req, res) => {
  try {
    const temple = new Temple(req.body);
    const result = await temple.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: 'Invalid temple data', error: err.message });
  }
};

const updateTemple = async (req, res) => {
  try {
    const result = await Temple.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!result) return res.status(404).json({ message: 'Temple not found' });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: 'Error updating temple', error: err.message });
  }
};

const deleteTemple = async (req, res) => {
  try {
    const result = await Temple.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Temple not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting temple', error: err.message });
  }
};

module.exports = { getAll, getSingle, createTemple, updateTemple, deleteTemple };