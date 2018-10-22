const webpackCommonConfig = require('./webpack.config.common');

module.exports = Object.assign({}, webpackCommonConfig, {
  entry: {
    client: './src/browser.js',
  },
});
