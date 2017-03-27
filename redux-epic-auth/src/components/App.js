import React, {Component} from 'react';
import {connect} from "react-redux"
import SignUp from "./signup"
import signUpLogin from "../store/actions/index.js"

class App extends Component {

  render() {
    return (<SignUp/>);
  }
}
export default connect()(App);