import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from "./components/signup"
import Main from "./components/main"
import Login from "./components/login"
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var { Provider } = require("react-redux");
var store = require("./configure/store").storeConfig()

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="/login" component={Login} />
        <IndexRoute component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
