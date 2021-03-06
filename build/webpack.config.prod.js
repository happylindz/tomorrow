// const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const constants = require('./constants');
const baseConfig = require('./webpack.config.base');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(baseConfig, {
  output: {
    path: constants.distPath,
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: constants.cdnPath,
    chunkFilename: 'js/[name].[chunkhash:8].js',
  },
  module: {
    rules: [
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => {
        return resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js$/);
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: 'used-twice',
      minChunks: (module, count) => (
        count >= 2
      ),
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ManifestPlugin({
      fileName: constants.manifestFileName,
    }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(constants.clientPath, 'sw.js'),
    // })
  ],
});
