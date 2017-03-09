import React from "react"
import { hashHistory } from "react-router";
import myFirebase from "../firebase/firebase"
var { connect } = require("react-redux")
var actions = require("../actions/index.js")

class signUp extends React.Component {
    constructor(props) {
        super(props)
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    handleSignUp(e) {
        e.preventDefault();
        var { dispatch, show } = this.props
        var credentials = {};
        credentials.email = this.refs.email.value;
        credentials.pass = this.refs.pass.value;
        dispatch(actions.signUpAction(credentials))
    }
    render() {
        return (
            <form onSubmit={this.handleSignUp}>
                <input type="text" ref="email" />
                <input type="password" ref="pass" />
                <button>Add</button>
            </form>
        )
    }
}
export default connect((state) => {
    return {
        show: state.loginsignupReducer
    }
})(signUp)