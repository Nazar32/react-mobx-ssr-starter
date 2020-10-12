const webpackCommonConfig = require('./webpack.config.common');

module.exports = Object.assign({}, webpackCommonConfig, {
  resolve: {
    ...webpackCommonConfig.resolve,
    fallback: { path: false, crypto: false }
  },
  entry: {
    client: './src/browser.js',
  },
});
