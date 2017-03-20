import React, {Component} from 'react';
import {connect} from "react-redux"
import {addTodoFirebase} from "../store/actions/index.js"

class App extends Component {
  
  handleSubmit(e) {
    e.preventDefault()
    var {dispatch} = this.props;
    var value = this.refs.text.value;
    dispatch(addTodoFirebase(value))
     
  }
  render() {
    return (
      <form onSubmit={this
        .handleSubmit
        .bind(this)}>
        <h2>Firebase crud</h2>
        <input type="text" ref="text"/>
        <input type="submit" value="add"/>
      </form>
    );
  }
}
export default connect()(App);