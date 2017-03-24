import React, { Component } from 'react';
import { connect } from "react-redux"
import { TodoAction } from "../store/actions/index.js"
var store = require("../store/store.js").storeConfig();
class TodoList extends Component {
  remove(key) {
    this.props.onRemove(this.props.index)
  }
  render() {
    return (
      <li>{this.props.children}

        <button onClick={this.remove.bind(this)}>delete</button>
      </li>
    )
  }
}

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
   console.log(key)
  }
  eachNote(key, index) {
    return <TodoList key={index} index={key} onRemove={this.handleRemove}>{}</TodoList>
  }

  render() {
    var {data} = this.props;
    var that = this;
    var todoList = Object.keys(data).map(function(key,index){
      var val = data[key];
      return (
        <p key={index} onClick={()=>{that.handleRemove(key)}}>{val}</p>
      )
    })

  console.log(data)
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