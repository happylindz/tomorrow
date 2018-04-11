'use strict';

module.exports = {
  keys: 'secret',
  middleware: ['errorHandler', 'login'],
  errorHandler: {
    match: '/api',
  },
  login: {
    match: '/admin',
  },
  mongoose: {
    client: {
      url: 'mongodb://127.0.0.1:27017/blog',
      options: {},
    },
  },
  security: {
    csrf: false,
    ctoken: false,
  },
  multipart: {
    fileExtensions: ['.md'],
  },
};
