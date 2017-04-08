import React, {Component} from "react";
import {TextField, Paper, RaisedButton} from "material-ui";

class Login extends Component {
    handleLogin() {
        var credentials = {};
        credentials.email = this
            .refs
            .email
            .getValue();
        credential.password = this
            .refs
            .pass
            .getValue();
    }
    render() {
        return (
            <div
                style={{
                width: "400px",
                margin: "20px auto",
                textAlign: "center"
            }}>
                <Paper zDepth={3}>
                    <h1>Login</h1>
                    <TextField floatingLabelText="Type your email" ref="email" fullWidth={true}/>
                    <br/>
                    <TextField
                        floatingLabelText="type your password"
                        ref="password"
                        type="password"
                        fullWidth={true}/>
                    <br/>
                    <RaisedButton fullWidth={true}>Login</RaisedButton>
                </Paper>
            </div>
        )
    }
}
export default Login;
