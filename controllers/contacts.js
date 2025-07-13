const Contact = require('../models/contact');

exports.getAll = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

exports.getById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    contact ? res.status(200).json(contact) : res.status(404).send('Not found');
  } catch {
    res.status(400).send('Invalid ID');
  }
};

exports.create = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json({ message: 'Created', id: contact._id });
};

exports.update = async (req, res) => {
  const result = await Contact.replaceOne({ _id: req.params.id }, req.body);
  result.modifiedCount > 0 ? res.sendStatus(204) : res.status(404).send('Not found');
};

exports.delete = async (req, res) => {
  const result = await Contact.deleteOne({ _id: req.params.id });
  result.deletedCount > 0 ? res.sendStatus(204) : res.status(404).send('Not found');
};