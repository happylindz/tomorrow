
const path = require('path');

exports.keys = 'private key';
exports.errorHandler = {
  match: '/api',
};
exports.login = {
  match: '/admin',
};
exports.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1:27017/blog',
    options: {
      autoIndex: false,
    },
  },
};

exports.multipart = {
  fileExtensions: ['.md'],
};

exports.session = {
  key: 'EGG_SESS',
  maxAge: 24 * 3600 * 1000,
  httpOnly: true,
  encrypt: true,
};

exports.view = {
  mapping: {
    '.html': 'ejs',
  },
  defaultExtension: '.html',
  root: `${path.resolve(__dirname, '../app/public')},${path.resolve(__dirname, '../app/view')}`,
};


exports.graphql = {
  router: '/graphql',
  app: true,
  agent: false,
  // graphiql: true,
};