const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './src/server/express.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'server-bundle.js'
  },
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()]
}
