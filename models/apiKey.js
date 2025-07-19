const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  key: { type: String, required: true },
  name: String,
  active: Boolean
});

// 🔧 Match exactly your Atlas collection: apiKeys
module.exports = mongoose.model('ApiKey', apiKeySchema, 'apiKeys');