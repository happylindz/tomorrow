const fs = require('fs-extra');
const webpackMerge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
const ManifestPlugin = require('webpack-manifest-plugin');
const constants = require('./constants');
const prodConfig = require('./webpack.config.prod');

let revisionedAssetManifest = fs.readJsonSync(path.join(constants.distPath, constants.manifestFileName), { throws: false }) || {};

const configureBabelLoader = (browserlist) => {
  return {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [
          ['env', {
            modules: false,
            useBuiltIns: true,
            targets: {
              browsers: browserlist,
            },
          }], 'react',
        ],
        plugins: [
          'babel-plugin-transform-decorators-legacy',
          'transform-object-rest-spread',
          'transform-class-properties',
          ['import', {
            'libraryName': 'antd'
          }],
          'react-hot-loader/babel',
          'syntax-dynamic-import'
        ],
      },
    },
  };
};

const modernConfig = webpackMerge(prodConfig, {
  entry: {
    'main': path.resolve(constants.clientPath, 'index.jsx'),
  },
  module: {
    rules: [
      configureBabelLoader([
        // The last two versions of each browser, excluding versions
        // that don't support <script type="module">.
        'last 2 Chrome versions', 'not Chrome < 60',
        'last 2 Safari versions', 'not Safari < 10.1',
        'last 2 iOS versions', 'not iOS < 10.3',
        'last 2 Firefox versions', 'not Firefox < 54',
        'last 2 Edge versions', 'not Edge < 15',
      ])
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity,
    }),
    new ManifestPlugin({
      fileName: constants.manifestFileName,
      seed: revisionedAssetManifest,
    }),
    // new WebpackPwaManifest({
    //   name: 'Lindz\'s Blog',
    //   short_name: 'Blog',
    //   description: 'An isomorphic progressive web blog built by React & Node',
    //   background_color: '#333',
    //   theme_color: '#333',
    //   filename: 'manifest.[hash:8].json',
    //   publicPath: 'https://cdn.lindongzhou.com/',
    //   icons: [
    //     {
    //       src: path.resolve(constants.publicPath, 'icon.png'),
    //       sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
    //       destination: path.join('icons')
    //     }
    //   ],
    //   ios: {
    //     'apple-mobile-web-app-title': 'Lindz\'s Blog',
    //     'apple-mobile-web-app-status-bar-style': '#333',
    //     'apple-mobile-web-app-capable': 'yes',
    //     'apple-touch-icon': '//cdn.lindongzhou.com/icons/icon_96x96.dbfccb1a5cef8093a77c079f761b2d63.png',
    //   },
    // })
  ]
});

const legacyConfig = webpackMerge(prodConfig, {
  entry: {
    'main-legacy': path.resolve(constants.clientPath, 'index.jsx'),
  },
  module: {
    rules: [
      configureBabelLoader([
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ])
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime-legacy',
      minChunks: Infinity,
    }),
    new ManifestPlugin({
      fileName: constants.manifestFileName,
      seed: revisionedAssetManifest,
    }),
  ]
});

const createCompiler = (config) => {
  const compiler = webpack(config);
  return () => {
    return new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        if (err) return reject(err);
        console.log(stats.toString({ colors: true }) + '\n');
        resolve();
      });
    });
  };
};

const compileModernBundle = createCompiler(modernConfig);
const compileLegacyBundle = createCompiler(legacyConfig);

module.exports = async () => {
  revisionedAssetManifest = {};
  await compileModernBundle();
  await compileLegacyBundle();
};