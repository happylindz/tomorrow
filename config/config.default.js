'use strict';

exports.keys = 'hello world';
exports.middleware = ['errorHandler', 'login'];
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

// 暂时
exports.security = {
  csrf: false,
  ctoken: false,
};

exports.session = {
  key: 'EGG_SESS',
  httpOnly: true,
  encrypt: true,
};
