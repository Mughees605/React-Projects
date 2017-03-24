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
  handleRemove(key) {
    var { dispatch } = this.props;
    dispatch(TodoAction.deleteTodo(key))
    console.log(key)
  }

  render() {
    var { data } = this.props;
    var todoList = Object.keys(data).map((key, index) => {
      var val = data[key];
      return (
        <div key={index}>
          <p>{val}</p>
          <button onClick={() => { this.handleRemove(key) }}>delete</button>
        </div>
      )
    })

    return (

      <div>
        {todoList}
        <form onSubmit={this
          .handleTodo
          .bind(this)}>
          <input type="text" ref="text" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default connect()(App);