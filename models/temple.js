const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  dedicated: { type: Date },
  area: { type: String },
  services: { type: [String] }
});

module.exports = mongoose.model('Temple', templeSchema);