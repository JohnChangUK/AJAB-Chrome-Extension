var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
      app: './src/index.js'
  },
  output: {
      filename: 'dist/bundle.js',
      sourceMapFilename: 'dist/bundle.map'
  },
  devtool: '#source-map',
  module: {
      loaders: [
          {
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            query: {
              presets: ['react', 'es2015']
            }
          }
      ]
  }
}
