const path = require('path');
const fs = require('fs');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

module.exports = {
  entry: {
    app: './server.js',
  },
  output: {
    path: path.resolve('build'),
    publicPath: 'http://localhost:3002/dist/',
    globalObject: 'this',
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
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
        ],
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDev,
              minimize: !isDev,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  mode: nodeEnv,
};
