exports.baseUrl = 'http://127.0.0.1:9001';
// 暂时
exports.security = {
  csrf: false,
  ctoken: false,
};
exports.middleware = ['errorHandler', 'graphql'];
