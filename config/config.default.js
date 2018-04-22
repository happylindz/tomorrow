
const path = require('path');

exports.keys = 'private key';
exports.middleware = ['errorHandler', 'login'];
// exports.middleware = ['errorHandler'];
exports.errorHandler = {
  match: '/api',
};
exports.login = {
  match: '/admin',
};
exports.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1:19999/blog',
    options: {
      autoIndex: false,
    },
  },
};

exports.multipart = {
  fileExtensions: ['.md'],
};

// 暂时
exports.security = {
  csrf: false,
  ctoken: false,
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
