require('dotenv').config();
const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  key: String,
  name: String,
  active: Boolean
});

const ApiKey = mongoose.model('ApiKey', apiKeySchema, 'apikeys');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');

    const exists = await ApiKey.findOne({ key: 'test123' });
    if (exists) {
      console.log('ℹ️ API key already exists');
    } else {
      await ApiKey.create({
        key: 'test123',
        name: 'Testing Key',
        active: true
      });
      console.log('🟢 API key seeded');
    }

    mongoose.disconnect();
  })
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err));