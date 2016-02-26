import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import MasterPage from './pages/MasterPage';
import IndexPage from './pages/IndexPage';

ReactDOM.render(
  <Router history={createHashHistory({ queryKey: false })}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);

ReactStormpath.init();
