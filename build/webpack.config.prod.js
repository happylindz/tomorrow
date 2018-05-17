const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const constants = require('./constants');
const baseConfig = require('./webpack.config.base');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(baseConfig, {
  output: {
    path: constants.distPath,
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '//cdn.lindongzhou.com/',
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
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public/css/*'),
      to: path.resolve(__dirname, '../app/view/css'),
      force: true,
    }]),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/template.html',
      publicPath: '/public',
      chunks: ['manifest', 'common', 'main-vendor', 'main'],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
      title: "Lindz's Blog",
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: './public/template.html',
      publicPath: '/public',
      chunks: ['manifest', 'common', 'admin-vendor', 'admin'],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
      title: '博客管理系统',
    }),
    new HtmlIncludeAssetsPlugin({
      assets: ['css/antd.min.css'],
      append: false,
      files: 'admin.html',
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
      name: 'main-vendor',
      minChunks: ({ resource }) => (
        resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js$/)
      ),
      chunks: ['main'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'admin-vendor',
      minChunks: ({ resource }) => (
        resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js$/)
      ),
      chunks: ['admin'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      chunks: ['admin-vendor', 'main-vendor'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
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
  ],
});
