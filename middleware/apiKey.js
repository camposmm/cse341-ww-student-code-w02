const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  key: String,
  name: String,
  active: Boolean
});

const ApiKey = mongoose.model('ApiKey', apiKeySchema, 'apikeys'); // Make sure this is correct

module.exports = async (req, res, next) => {
  const key = req.query.apiKey;

  if (!key) {
    console.log('❌ No API key provided');
    return res.status(400).json({ message: 'API key missing' });
  }

  console.log('🔑 Incoming API Key:', key);

  // DEBUG: log all existing keys
  const all = await ApiKey.find();
  console.log('📋 All keys in DB:', all);

  const found = await ApiKey.findOne({ key, active: true });
  console.log('🧾 Found in DB:', found);

  if (!found) {
    return res.status(403).json({ message: 'Invalid or inactive API key' });
  }

  next();
};