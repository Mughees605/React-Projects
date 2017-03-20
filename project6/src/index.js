import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from "./main";
//import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Main url = "https://mughees-hello-world.herokuapp.com/post"/>,
  document.getElementById('root')
);
