import React, {Component} from "react";
import {TextField, Paper, RaisedButton} from "material-ui";

class LoginCont extends Component {
      handleLogin() {
        var credentials = {};
        credentials.email = this
            .refs
            .email
            .getValue();
        credentials.password = this
            .refs
            .password
            .getValue();
            alert(credentials.email)
    }
    render() {
        return (
            <div>
                <TextField floatingLabelText="Type your email" ref="email" fullWidth={true}/>
                <br/>
                <TextField
                    floatingLabelText="type your password"
                    ref="password"
                    type="password"
                    fullWidth={true}/>
                <br/>
                <RaisedButton
                    fullWidth={true}
                    onClick={this
                    .handleLogin
                    .bind(this)}>Login</RaisedButton>
            </div>
        )
    }
}
export default LoginCont;