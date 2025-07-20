const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple & Contacts API',
    description: 'Temple and Contacts API for CSE 341'
  },
  host: 'localhost:3000',
  schemes: ['http'],
  tags: [
    {
      name: 'Contacts',
      description: 'Contacts endpoints'
    },
    {
      name: 'Temples',
      description: 'Temples endpoints'
    }
  ],
  definitions: {
    Contact: {
      firstName: 'Marcos',
      lastName: 'Campos',
      email: 'marcos@example.com',
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
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);