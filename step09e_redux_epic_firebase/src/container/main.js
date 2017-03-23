import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App.js"
import {TodoAction} from "../store/actions"

function mapStateToProps(state) {
    return {
        todos: state.TodoReducer.payload
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getTodos: () => dispatch(TodoAction.getTodo()),
    }
}
class Main extends Component {
    constructor(props) {
        super(props)
        this.props.getTodos();

    }
    renderData(){
        var {todos} = this.props;
        if(todos){
            return  <App data={todos} />
        }
        else {
            return <p>error</p>
        }
    }
    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);