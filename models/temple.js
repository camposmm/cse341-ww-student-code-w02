const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  dedicated: { type: Date },
  area: { type: String }
});

module.exports = mongoose.model('Temple', templeSchema);