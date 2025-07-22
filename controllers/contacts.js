const Contact = require('../models/contact');

const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch contacts', error: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving contact', error: err.message });
  }
};

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const result = await contact.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: 'Invalid contact data', error: err.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const result = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!result) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: 'Error updating contact', error: err.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const result = await Contact.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Contact not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting contact', error: err.message });
  }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };