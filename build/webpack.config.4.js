const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const constants = require('./constants');
const config = require('../config.json');
const baseConfig = require('./webpack.config.base');


module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  output: {
    path: constants.distPath,
    filename: 'js/[name].[chunkhash:8].js',
    // publicPath: '//cdn.lindongzhou.com/',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          test: /node_modules\//,
          name: 'vendor',
          priority: 10,
          enforce: true
        },
        styles: {
          name: 'styles',
          test: /\.(c|sc|sa)ss$/,
          chunks: 'all',
          enforce: false
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
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
    ]
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      publicPath: '/public',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        minifyJS: true,
      },
      title: config.blog.title,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new BundleAnalyzerPlugin(),
  ],
});
