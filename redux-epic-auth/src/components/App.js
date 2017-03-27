import React, {Component} from 'react';
import {connect} from "react-redux"
import SignUp from "./signup"
import {Router, hashHistory, Route,IndexRoute} from "react-router"

class App extends Component {

  render() {
    return (
     <div>
      <p>Main</p>
      {this.props.children}
     </div>
    );
  }
}
export default connect()(App);