import React from "react"
// import { hashHistory } from "react-router";
// import myFirebase from "../firebase/firebase"
var { connect } = require("react-redux")
var actions = require("../actions/index.js")

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleLogin(e) {
        e.preventDefault();
        var { dispatch } = this.props
        var credentials = {};
        credentials.email = this.refs.email.value;
        credentials.pass = this.refs.pass.value;
        dispatch(actions.LoginAction(credentials))
    }
    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <p>Login Component</p>
                <input type="text" ref="email" />
                <input type="password" ref="pass" />
                <button>Login</button>
            </form>
        )
    }
}
export default connect()(Login)