const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const router = require('express').Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;