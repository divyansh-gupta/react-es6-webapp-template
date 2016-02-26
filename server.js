var path = require('path');
var express = require('express');
var stormpath = require('express-stormpath');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,  {
  noInfo: true,
  publicPath: config.output.publicPath
}));

stormpath.init(app, { website: true });

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

function beginServer() {
  app.listen(3000, function (err) {
    if (err) return console.error(err);
    console.log('listening at http://127.0.0.1:8080');
  });
}

app.on('stormpath.ready', beginServer);
