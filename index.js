require('dotenv').config();
const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const jwtCheck = require('./middleware/auth');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error('❌ MongoDB URI not defined in environment variables.');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const contactRoutes = require('./routes/contacts');
const templeRoutes = require('./routes/temples');
app.use('/contacts', contactRoutes);
app.use('/temples', templeRoutes);