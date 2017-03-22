import React, {Component} from 'react';
import {connect} from "react-redux"
import CounterAction from "../store/actions/index.js"

class App extends Component {

  handleIncrement() {
    var {dispatch} = this.props;
    dispatch(CounterAction.asyncIncrement());
  }
  handleDecrement() {}
  render() {
    return (

      <div>
      {this.props.data}
        <button onClick={this
          .handleIncrement
          .bind(this)}>+</button>
        <button>-</button>
      </div>
    );
  }
}
export default connect()(App);