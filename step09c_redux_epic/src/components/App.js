import React, {Component} from 'react';
import {connect} from "react-redux"
import CounterAction from "../store/actions/index.js"

class App extends Component {

  handleIncrement() {
    var {dispatch} = this.props;
    dispatch(CounterAction.asyncIncrement());
  }
  handleDecrement() {
    var {dispatch} = this.props;
    dispatch(CounterAction.asyncDecrement());
  }
  render() {
    return (

      <div>
        <h1>{this.props.data}</h1>
        <button onClick={this
          .handleIncrement
          .bind(this)}>+</button>
        <button onClick={this.handleDecrement.bind(this)}>-</button>
      </div>
    );
  }
}
export default connect()(App);