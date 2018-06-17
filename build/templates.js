const fs = require('fs-extra');
const nunjucks = require('nunjucks');
const path = require('path');
const minify = require('html-minifier').minify;
const constants = require('./constants');
const blog = require('../config.json').blog;

let revisionedAssetManifest = {};

const env = nunjucks.configure(constants.templatePath, {
  autoescape: false,
  watch: false,
});

env.addFilter('revision', (filename) => revisionedAssetManifest[filename]);

module.exports = async () => {
  revisionedAssetManifest = await fs.readJson(path.join(constants.distPath, constants.manifestFileName), { throws: false }) || {};

  await fs.outputFile(path.join(constants.viewPath, 'index.html'), minify(nunjucks.render('index.html', blog), {
    collapseWhitespace: true,
    removeComments: true,
    // removeAttributeQuotes: true,
    minifyJS: true,
    // removeEmptyAttributes: true,
  }));
  console.log('Built template: index.html\n');
};