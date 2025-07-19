const Temple = require('../models/temple');

const getAllTemples = async (req, res) => {
  const temples = await Temple.find();
  res.status(200).json(temples);
};

const getTempleById = async (req, res) => {
  const temple = await Temple.findById(req.params.id);
  if (!temple) return res.status(404).json({ message: 'Temple not found' });
  res.status(200).json(temple);
};

const createTemple = async (req, res) => {
  const temple = new Temple(req.body);
  const result = await temple.save();
  res.status(201).json(result);
};

const updateTemple = async (req, res) => {
  const result = await Temple.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!result) return res.status(404).json({ message: 'Temple not found' });
  res.status(204).send();
};

const deleteTemple = async (req, res) => {
  const result = await Temple.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).json({ message: 'Temple not found' });
  res.status(204).send();
};

module.exports = { getAllTemples, getTempleById, createTemple, updateTemple, deleteTemple };