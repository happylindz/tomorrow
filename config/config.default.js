'use strict';

module.exports = {
  keys: 'secret',
  middleware: ['errorHandler'],
  errorHandler: {
    match: '/api',
  },
  mongoose: {
    client: {
      url: 'mongodb://127.0.0.1:27017/blog',
      options: {},
    },
  },
};
