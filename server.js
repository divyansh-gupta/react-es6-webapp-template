var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.post('/userAuth/login', (req, res) => {
  
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/css/bootstrap.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

function beginServer() {
  app.listen(3000, function (err) {
    if (err) return console.error(err);
    console.log('listening at http://127.0.0.1:3000 locally, or port 8080 with Vagrant');
  });
}

beginServer();
