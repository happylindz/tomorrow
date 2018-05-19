const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const constants = require('./constants');
const baseConfig = require('./webpack.config.base');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  output: {
    path: constants.publicPath,
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js',
  },
  module: {
    rules: [{
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
    }]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('../public/dll.manifest.json')
    }),
    new HtmlIncludeAssetsPlugin({
      assets: ['js/dll.js'],
      append: false,
    }),
    new HtmlIncludeAssetsPlugin({
      assets: ['css/antd.min.css'],
      append: false,
      files: 'admin.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/template.html',
      publicPath: '',
      chunks: ['manifest', 'vendor', 'main'],
      chunksSortMode: 'manual',
      title: "Lindz's Blog",
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: './public/template.html',
      publicPath: '',
      chunks: ['manifest', 'vendor', 'admin'],
      chunksSortMode: 'manual',
      title: '博客管理系统',
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(constants.clientPath, 'sw.js'),
    }),
  ],
  devtool: 'source-map',
});
