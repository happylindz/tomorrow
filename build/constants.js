const path = require('path');
const rootDirectory = path.resolve(__dirname, '../');
const resolveRoot = relativePath => path.resolve(rootDirectory, relativePath);

module.exports = {
  publicPath: resolveRoot('./public'),
  appPath: resolveRoot('./app'),
  distPath: resolveRoot('./app/public'),
  viewPath: resolveRoot('./app/view'),
  clientPath: resolveRoot('./client'),
  adminPath: resolveRoot('./admin'),
  contenBase: resolveRoot('./dist'),
  rootDirectory,
};
