import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App.js"
import { TodoAction } from "../store/actions"

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
    render() {
        return (
            <div>
                {(this.props.todos) ?  <App data={this.props.todos} /> : "nodata"}
                {/*<App/>*/}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);