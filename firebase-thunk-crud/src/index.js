import React from 'react';
import ReactDOM from 'react-dom';
import Todo from "./component/todo"
import './index.css';
import {Provider} from "react-redux";
import {store} from "./store/store.js"
import {TodoAction} from "./store/action"

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

store.dispatch(TodoAction.fetchingData());
ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store}>
    <Todo/>
  </Provider>
</MuiThemeProvider>, document.getElementById('root'));
