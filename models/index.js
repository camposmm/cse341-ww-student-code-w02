const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.temples = require('./temple.js')(mongoose);
db.apiKeys = require('./apiKey.js')(mongoose); // 👈 add this line

module.exports = db;