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
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devtool: '#source-map',
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            query: {
              presets: ['react', 'es2015', 'stage-0']
            }
          }
      ]
  }
}
