const bundles = require('./bundles');
const templates = require('./templates');

module.exports = async () => {
  console.log('Compiling modern and legacy script bundles...\n');
  await bundles();

  console.log('Compiling templates...\n');
  await templates();

  console.log('Site ready!');
};