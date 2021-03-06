import React from 'react';
import ReactDOM from 'react-dom';
//component start
import Main from "./components/main.js";
import LoginCont from "./container/login.js";
import SignUpCont from "./container/signup.js";
import DashboardCont from "./container/dashboard.js";
import MissingPersonCont from "./container/missing.js";
import CrimeCont from "./container/crime.js";
import ReportsCont from "./container/reports"
//component end
import {ReportsAction} from "./store/action/reports"
import {Provider} from "react-redux";
import {store} from "./store/store.js"
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

store.dispatch(ReportsAction.allMissingReports());

ReactDOM.render(

  <Provider store={store}>
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Router history={hashHistory}>
      <Route component={Main} path="/">
        <IndexRoute component={LoginCont}/>
        <Route path="signup" component={SignUpCont}/>
      </Route>
      <Route path="/dashboard" component={DashboardCont}>
        <Route path="missing" component={MissingPersonCont}/>
        <Route path="crime" component={CrimeCont}/>
        <Route path="reports" component={ReportsCont}/>
      </Route>
    </Router>
  </MuiThemeProvider>
</Provider>, document.getElementById('root'));
