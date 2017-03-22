import React, {Component} from 'react';
import {connect} from "react-redux"
import {TodoAction} from "../store/actions/index.js"
var store = require("../store/store.js").storeConfig();

store.dispatch(TodoAction.getTodo());
class App extends Component {

  constructor(){
    super()
  
  }

  handleTodo(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var value = this.refs.text.value
    dispatch(TodoAction.addTodo(value));

  }
  render() {
    return (

      <div>
        <form onSubmit={this
          .handleTodo
          .bind(this)}>
          <input type="text" ref="text"/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default connect()(App);