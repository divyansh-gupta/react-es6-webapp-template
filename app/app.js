import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, IndexRoute, Route } from 'react-router';

import MasterPage from './pages/MasterPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const container = document.getElementById('app-container');

var instance = ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <Route path='login' component={LoginPage}></Route>
      <Route path='register' component={RegisterPage}></Route>
    </Route>
  </Router>, container
);
