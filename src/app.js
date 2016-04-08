import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, IndexRoute, Route } from 'react-router';
import MasterPage from './pages/MasterPage';
import IndexPage from './pages/IndexPage';

var instance = ReactDOM.render(
  <Router>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);
