const webpack = require('webpack');
const path = require('path');
const os = require('os');
const HappyPack = require('happypack');
const constants = require('./constants');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  entry: {
    admin: path.resolve(constants.adminPath, 'index.js'),
    main: path.resolve(constants.clientPath, 'index.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash:7]'
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [path.resolve(__dirname, '../node_modules')],
    mainFields: ['browser', 'module', 'main'],
    alias: {
      '@': constants.clientPath,
    },
  },
  plugins: [
    new HappyPack({
      id: 'babel',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory'],
      verbose: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        __CLIENT__: JSON.stringify('client'),
      },
    }),
    new webpack.NamedChunksPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
