const doc = {
  info: {
    title: 'Temple & Contacts API',
    description: 'Temple and Contacts API for CSE 341',
    version: '1.0.0'
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'Bearer token authorization'
    }
  },
  security: [{ bearerAuth: [] }],
  tags: [
    { name: 'Contacts', description: 'Endpoints for managing contacts' },
    { name: 'Temples', description: 'Endpoints for managing temples' }
  ],
  paths: {
    '/contacts': {
      get: {
        tags: ['Contacts'],
        summary: 'Get all contacts',
        responses: {
          200: {
            description: 'List of contacts',
            schema: { $ref: '#/definitions/Contact' }
          }
        }
      },
      post: {
        tags: ['Contacts'],
        summary: 'Create a new contact',
        security: [{ bearerAuth: [] }],
        responses: {
          201: {
            description: 'Contact created',
            schema: { $ref: '#/definitions/Contact' }
          }
        }
      }
    },
    '/contacts/{id}': {
      get: {
        tags: ['Contacts'],
        summary: 'Get a contact by ID',
        parameters: [{ in: 'path', name: 'id', required: true, type: 'string' }],
        responses: {
          200: {
            description: 'Contact found',
            schema: { $ref: '#/definitions/Contact' }
          }
        }
      },
      put: {
        tags: ['Contacts'],
        summary: 'Update a contact by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, type: 'string' }],
        responses: {
          200: { description: 'Contact updated' }
        }
      },
      delete: {
        tags: ['Contacts'],
        summary: 'Delete a contact by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, type: 'string' }],
        responses: {
          200: { description: 'Contact deleted' }
        }
      }
    },
    '/temples': {
      get: {
        tags: ['Temples'],
        summary: 'Get all temples',
        responses: {
          200: {
            description: 'List of temples',
            schema: { $ref: '#/definitions/Temple' }
          }
        }
      },
      post: {
        tags: ['Temples'],
        summary: 'Create a new temple',
        security: [{ bearerAuth: [] }],
        responses: {
          201: {
            description: 'Temple created',
            schema: { $ref: '#/definitions/Temple' }
          }
        }
      }
    },
    '/temples/{id}': {
      get: {
        tags: ['Temples'],
        summary: 'Get a temple by ID',
        parameters: [{ in: 'path', name: 'id', required: true, type: 'string' }],
        responses: {
          200: {
            description: 'Temple found',
            schema: { $ref: '#/definitions/Temple' }
          }
        }
      },
      put: {
        tags: ['Temples'],
        summary: 'Update a temple by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, type: 'string' }],
        responses: {
          200: { description: 'Temple updated' }
        }
      },
      delete: {
        tags: ['Temples'],
        summary: 'Delete a temple by ID',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, type: 'string' }],
        responses: {
          200: { description: 'Temple deleted' }
        }
      }
    }
  },
  definitions: {
    Contact: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    },
    Temple: {
      name: 'Salt Lake Temple',
      location: 'Salt Lake City, Utah'
    }
  }
};

module.exports = doc;