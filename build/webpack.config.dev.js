const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const constants = require('./constants');
const baseConfig = require('./webpack.config.base');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  entry: {
    admin: path.resolve(constants.adminPath, 'index.js'),
    main: path.resolve(constants.clientPath, 'index.jsx'),
  },
  output: {
    path: constants.publicPath,
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'happypack/loader?id=babel',
    },
    { test: /\.tsx?$/, loader: ['babel-loader', 'ts-loader'] },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    }]
  },
  devServer: {
    open: true,
    contentBase: constants.publicPath,
    host: '0.0.0.0',
    port: 9001,
    historyApiFallback: {
      rewrites: [
        { from: /^\/admin/, to: '/admin.html' },
        { from: /^\/$/, to: '/index.html' },
      ]
    },
    proxy: [{
      context: ['/api', '/graphql'],
      target: 'http://localhost:7001',
    }],
  },
  plugins: [
    new HappyPack({
      id: 'babel',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory'],
      verbose: true,
    }),
    // new webpack.DllReferencePlugin({
    //   manifest: require('../public/dll.manifest.json')
    // }),
    // new HtmlIncludeAssetsPlugin({
    //   assets: ['js/dll.js'],
    //   append: false,
    // }),
    // new HtmlIncludeAssetsPlugin({
    //   assets: ['css/antd.min.css'],
    //   append: false,
    //   files: 'admin.html',
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './views/dev.html',
      publicPath: '',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: './views/dev.html',
      publicPath: '',
      chunks: ['admin'],
    }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(constants.clientPath, 'sw.js'),
    // }),
  ],
});
