import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {Router, Route, hashHistory} from "react-router";

import {Provider} from 'react-redux';
import store from './store'

import Main from './components/Main.js';
import TopUsers from "./components/top-user.js"
import AllUsers from "./components/all-user.js"

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>
        <Router history={hashHistory}>

            <Route path="/" component={Main}>
                <Route path="top-user" component={TopUsers}></Route>
                <Route path="all-user" component={AllUsers}></Route>
            </Route>

        </Router>
    </Provider>
</MuiThemeProvider>, document.getElementById('root'));
