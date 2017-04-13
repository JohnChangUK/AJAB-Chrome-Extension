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
  // plugins: process.env.NODE_ENV === 'production' ? [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     minimize: true,
  //     compress: {
  //       warnings: true,
  //       drop_console: true
  //     }
  //   })
  // ] : [],
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
