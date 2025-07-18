const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));
router.use('/temples', require('./temples'));
router.use('/', require('../swagger/swagger'));

module.exports = router;