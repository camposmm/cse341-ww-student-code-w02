const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  key: String,
  name: String,
  active: Boolean,
});

const ApiKey = mongoose.model('ApiKey', apiKeySchema, 'apikeys');

module.exports = async (req, res, next) => {
  const key = req.query.apiKey;
  console.log('🔑 Incoming API Key:', key);

  if (!key) return res.status(400).json({ message: 'API key missing' });

  const found = await ApiKey.findOne({ key, active: true });
  console.log('🧾 Found in DB:', found);

  if (!found) return res.status(403).json({ message: 'Invalid or inactive API key' });

  next();
};