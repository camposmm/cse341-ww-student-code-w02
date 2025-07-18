// viewKeys.js
const mongoose = require('mongoose');
const ApiKey = require('./models/apiKey'); // make sure this path is correct
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    const keys = await ApiKey.find();
    console.log("Stored API Keys:", keys);
    mongoose.disconnect();
  })
  .catch((err) => console.error("DB error:", err));