const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  dedication: String,
  services: [String],
});

module.exports = mongoose.model('Temple', templeSchema);