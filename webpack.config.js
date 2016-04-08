'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    reactapp: [
      './src/app.js'
    ]
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      test: /\.json?$/,
      loader: 'json-loader'
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: [
        path.join(__dirname, 'app'),
        path.join(__dirname, 'lib')
      ]
    }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
    }, {
      test: /\/css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};
