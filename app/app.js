import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory, Router, IndexRoute, Route } from 'react-router';

// import reducers from '<project-path>/reducers'; <-- TODO

import MasterPage from './pages/MasterPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const store = createStore(
  combineReducers({
    // ...reducers,  <-- TODO
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

const container = document.getElementById('app-container');

var instance = ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={MasterPage}>
        <IndexRoute component={IndexPage} />
        <Route path='login' component={LoginPage}></Route>
        <Route path='register' component={RegisterPage}></Route>
      </Route>
    </Router>
  </Provider>, container
);
