const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  key: String,
  name: String,
  active: Boolean
});

const ApiKey = mongoose.model('ApiKey', apiKeySchema, 'apikeys'); // 👈 collection name MUST match!

module.exports = async (req, res, next) => {
  const key = req.query.apiKey;
  if (!key) {
    return res.status(400).json({ message: 'API key missing' });
  }

  const found = await ApiKey.findOne({ key, active: true });

  if (!found) {
    return res.status(403).json({ message: 'Invalid or inactive API key' });
  }

  next();
};