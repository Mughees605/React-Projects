import React, { Component } from "react";
import { connect } from "react-redux";
import { TodoAction } from "../store/action"

function mapStateToProps(state) {
    return {
        todo: state.TodoReducer
    }
}

class Todo extends Component {
    constructor() {
        super()

    }

    handleAddTodo(e) {
        e.preventDefault();
        var value = this.refs.text.value;
        this.refs.text.value = "";
        this.props.dispatch(TodoAction.addFirebase(value));
    }
    renderDisplay() {
        return (
            <div>
                <form onSubmit={this.handleAddTodo.bind(this)}>
                    <input type="text" ref="text" />
                    <button>Add</button>
                </form>
                {this.props.todo.data.map((val,i)=>{
                    return <p key={i}>{val}</p>
                })}
            </div>
        )
    }
    render() {
       
           if(this.props.todo.getData){
                return this.renderDisplay()
           }
           else{
             return  <p>Loading...............</p>
           }
        
    }
}
export default connect(mapStateToProps)(Todo);