const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const constants = require('./constants');
const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  entry: {
    'admin': path.resolve(constants.adminPath, 'index.js'),
  },
  output: {
    path: constants.distPath,
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: constants.cdnPath,
    chunkFilename: 'js/[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader?minimize', 'postcss-loader'] })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?minimize', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'babel',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory'],
      verbose: true,
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:8].css',
      allChunks: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        },
        output: {
          beautify: false,
          comments: false,
        },
      },
      parallel: true,
      cache: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: '../view/admin.html',
      template: './views/admin.html',
    }),
  ],
});
