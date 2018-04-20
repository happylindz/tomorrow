const path = require('path');
const webpack = require('webpack');
const DllPlugin = require('webpack/lib/DllPlugin');
const vendors = [
  'react',
  'react-dom',
  'dva',
  'antd',
  'babel-polyfill',
  'moment',
  'redux-logger',
  'history',
  'axios',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-saga',
  'redux-thunk',
];

module.exports = {
  entry: {
    'dll': vendors,
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../public'),
    library: '__[name]__lib',
  },
  plugins: [
    new DllPlugin({
      name: '__[name]__lib',
      path: path.join(__dirname, '../public', '[name].manifest.json'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]
};
