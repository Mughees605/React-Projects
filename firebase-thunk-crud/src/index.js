import React from 'react';
import ReactDOM from 'react-dom';
import Todo from "./component/todo"
import './index.css';
import { Provider } from "react-redux";
import { store } from "./store/store.js"
import {TodoAction} from "./store/action"
store.dispatch(TodoAction.fetchingData());
ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>
  ,
  document.getElementById('root')
);
