'use strict';

require('babel-register');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');

const webpackConfig = require('./webpack.config');
const config = require('./server/config');
const User = require('./server/models/User');

const app = express();

app.use(require('webpack-dev-middleware')(webpack(webpackConfig), {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.get('/css/bootstrap.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackUrl
  }, (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate({ facebookId: profile.id }, (err, user) => {
      return cb(err, user);
    });
  }
), { session: false }); // Session turned off to allow for custom JWT creation

passport.authenticate('facebook');

app.post('/auth/login', (req, res) => {
  
});

function beginServer() {
  app.listen(3000, function (err) {
    if (err) return console.error(err);
    console.log('listening at http://127.0.0.1:3000 locally, or port 8080 with Vagrant');
  });
}

beginServer();
