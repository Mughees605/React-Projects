import React from 'react';
import ReactDOM from 'react-dom';
//component start
import Main from "./components/main.js";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
//component end
import {Provider} from "react-redux";
import {store} from "./store/store.js"
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

ReactDOM.render(

  <Provider store={store}>
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route component={Main} path="/">
        <IndexRoute component={Login}/>
        <Route path="signup" component={SignUp}/>
      </Route>
    </Router>
  </MuiThemeProvider> 
</Provider>, document.getElementById('root'));
