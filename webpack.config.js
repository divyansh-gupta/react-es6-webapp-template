var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app.js'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }]
  }
};
