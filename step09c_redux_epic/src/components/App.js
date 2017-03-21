import React, {Component} from 'react';
import {connect} from "react-redux"
import {getRepo} from "../store/actions/index.js"
import CounterAction from "../store/actions/index.js"

class App extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var value = this.refs.text.value;
    dispatch(getRepo(value)); //dispatching action getRepo
  }
  handleIncrement(){
  var {dispatch} = this.props;
  dispatch(CounterAction.asyncIncrement());
  }
  handleDecrement(){

  }
  render() {
    return (
      <div>
        <form
        onSubmit={this
        .handleSubmit
        .bind(this)}
        style={{
        width: "400px",
        margin: "0px auto"
      }}>
        <h1>Ajax Request Example</h1>
        <div>
          <input type="text" ref="text" placeholder="Your github username"/>
          <input type="submit" value="search"/>
        </div>
        
        {this // data coming from main js
          .props
          .data
          .map(function (val, i) {
            return (
              <a key={i} href={val.html_url}>
                <p>{val.name}</p>
              </a>

            )
          })}
      </form>
      
      <div>
        
        <button onClick={this.handleIncrement.bind(this)}>+</button>
        <button>-</button>
      </div>
      </div>
    );
  }
}
export default connect()(App);