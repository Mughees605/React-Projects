import React, {Component} from "react";
import {connect} from "react-redux";
import App from "../components/App.js"
class Main extends Component {

    render() {
        return (
            <div>
            <App data={this.props.counterReducer}/>
            </div>
        )
    }
}
export default connect((state) => {
  
    return {
        counterReducer:state.CounterReducer
    }
})(Main);