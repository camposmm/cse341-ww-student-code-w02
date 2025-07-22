require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri || !mongoUri.startsWith('mongodb')) {
  console.error('❌ Invalid or missing MONGODB_URI');
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/temples', require('./routes/temples'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Welcome to the combined Contacts and Temples API!');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port} or on Render`);
});