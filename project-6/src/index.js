import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Main from "./main.js"

ReactDOM.render(
  <Main url ='https://mughees-hello-world.herokuapp.com/post' />,
  document.getElementById('root')
);
