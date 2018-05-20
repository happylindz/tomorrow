const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const constants = require('./constants');
const baseConfig = require('./webpack.config.base');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(baseConfig, {
  output: {
    path: constants.distPath,
    filename: 'js/[name].[chunkhash:8].js',
    // publicPath: '/',
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
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../public/css/*'),
    //   to: path.resolve(__dirname, '../app/view/css'),
    //   force: true,
    // }]),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
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
    new ServiceWorkerWebpackPlugin({
      entry: path.join(constants.clientPath, 'sw.js'),
    }),
    new WebpackPwaManifest({
      name: 'Lindz\'s Blog',
      short_name: 'Blog',
      description: 'An isomorphic progressive web blog built by React & Node',
      background_color: '#000',
      filename: 'manifest.[hash:8].json',
      publicPath: '/',
      icons: [
        {
          src: path.resolve(constants.publicPath, 'icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          destination: path.join('icons')
        }
      ],
      ios: {
        'apple-mobile-web-app-title': 'Lindz\'s Blog',
        'apple-mobile-web-app-status-bar-style': 'transparent',
        'apple-mobile-web-app-capable': 'yes',
        'apple-touch-icon': '/icons/icon_128x128.cc0714ab18fa6ee6de42ef3d5ca8fd09.png',
      },
    })
  ],
});
