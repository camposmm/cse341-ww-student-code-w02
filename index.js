require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();
const port = process.env.PORT || 3000;

mongoose.set('strictQuery', false); // Suppress deprecation warning

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri || !mongoUri.startsWith('mongodb')) {
  console.error('❌ Invalid or missing MONGODB_URI');
  process.exit(1);
}
mongoose
  .connect(mongoUri)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/temples', require('./routes/temples'));

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Root
app.get('/', (req, res) => {
  res.send('Welcome to the combined Contacts and Temples API!');
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});