import React, {Component} from "react";
import {connect} from "react-redux";
import App from "../components/App.js"
class Main extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.counterReducer}</h1>
            <App data={this.props.value}/>
            </div>
        )
    }
}
export default connect((state) => {
    var value = state.getRepoReducer
    return {
        value,
        counterReducer:state.CounterReducer
    }
})(Main);