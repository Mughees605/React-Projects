import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from "./components/signup"
import Main from "./components/main"
import Login from "./components/login"
import Register from "./components/registerdonor"
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var { Provider } = require("react-redux");
import myFirebase from "./firebase/firebase.js";
var store = require("./configure/store").storeConfig();
var actions = require("./actions/index.js");
myFirebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(actions.pullData());
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <IndexRoute component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
