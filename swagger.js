const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple & Contacts API',
    description: 'Temple and Contacts API for CSE 341',
  },
  host: 'cse341-ww-student-code-w02.onrender.com',
  schemes: ['https'],
  definitions: {
    Contact: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      favoriteColor: 'blue',
      birthday: '1990-01-01'
    },
    Temple: {
      templeName: 'São Paulo Temple',
      location: 'São Paulo, Brazil',
      dedicated: '1978-10-30',
      area: '59392 ft²'
    }
  }
};

const outputFile = './swagger-output.json';

// ✅ Add all relevant files that define endpoints
const endpointsFiles = ['./index.js', './routes/contacts.js', './routes/temples.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);