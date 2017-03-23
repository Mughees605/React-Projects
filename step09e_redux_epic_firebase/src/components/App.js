import React, { Component } from 'react';
import { connect } from "react-redux"
import { TodoAction } from "../store/actions/index.js"
var store = require("../store/store.js").storeConfig();

class App extends Component {

  constructor() {
    super()
  }

  handleTodo(e) {
    e.preventDefault();
    var { dispatch } = this.props;
    var value = this.refs.text.value
    dispatch(TodoAction.addTodo(value));

  }
  render() {
    var { data } = this.props;
    let todoList = Object.keys(data).map(function (key, index) {
      let val = data[key];
      return (
        <li key={index}>{val}</li>
      )
    })
    return (

      <div>
        <form onSubmit={this
          .handleTodo
          .bind(this)}>
          <input type="text" ref="text" />
          <button type="submit">Add Todo</button>
          {todoList}
        </form>

      </div>
    );
  }
}
export default connect()(App);