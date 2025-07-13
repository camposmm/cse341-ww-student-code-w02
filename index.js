const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB'));

app.use(cors());
app.use(express.json());
app.use('/', require('./routes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log('Connecting to DB:', process.env.MONGODB_URI);