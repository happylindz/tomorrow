const path = require('path');
const nodeExternals = require('webpack-node-externals');
const constants = require('./constants');
module.exports = {
  entry: path.resolve(constants.clientPath, 'server.js'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    path: path.resolve(constants.appPath, 'server'),
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [path.resolve(__dirname, '../node_modules')],
    mainFields: ['browser', 'module', 'main'],
    alias: {
      '@': constants.clientPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css/,
        use: ['ignore-loader'],
      },
      {
        test: /\.scss/,
        use: ['ignore-loader'],
      },
    ]
  },
};