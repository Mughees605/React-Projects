import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App.js"
import SignUp from "./components/signup.js"
import {Provider} from "react-redux";
import {Router, Route, hashHistory, IndexRoute} from "react-router"
var store = require("./store/store.js").storeConfig();
ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SignUp}/>
    </Route>
  </Router>
</Provider>, document.getElementById('root'));
