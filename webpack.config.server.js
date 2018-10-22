const path = require('path');
const fs = require('fs');
const webpackCommonConfig = require('./webpack.config.common');

module.exports = Object.assign({}, webpackCommonConfig, {
  entry: {
    app: path.resolve('server', 'server.js'),
  },
  target: 'node',
  externals: fs.readdirSync('node_modules')
    .reduce((acc, mod) => {
      if (mod === '.bin') {
        return acc;
      }

      acc[mod] = `commonjs ${mod}`;
      return acc;
    }, {}),
});
