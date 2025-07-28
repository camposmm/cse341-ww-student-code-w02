const swaggerAutogen = require('swagger-autogen')();
const doc = require('./swagger.js'); // uses external schema file

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/contacts.js', './routes/temples.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('✅ Swagger file generated!');
});