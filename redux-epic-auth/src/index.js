import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App.js"
import SignUp from "./components/signup.js"
import Login from "./components/Login.js"
import {Provider} from "react-redux";
import {Router, Route, hashHistory, IndexRoute} from "react-router"
var store = require("./store/store.js").storeConfig();
ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SignUp}/>
      <Route path="/login" component={Login}></Route>
    </Route>
  </Router>
</Provider>, document.getElementById('root'));
