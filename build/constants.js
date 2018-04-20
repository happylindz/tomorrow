const path = require('path');
const rootDirectory = path.resolve(__dirname, '../');
const resolveRoot = relativePath => path.resolve(rootDirectory, relativePath);

module.exports = {
  publicPath: resolveRoot('./public'),
  distPath: resolveRoot('./app/public'),
  clientPath: resolveRoot('./client'),
  adminPath: resolveRoot('./admin'),
  contenBase: resolveRoot('./dist'),
  rootDirectory,
};
