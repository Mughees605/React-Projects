import React, {Component} from "react";
import {TextField, Paper, RaisedButton} from "material-ui";


class Login extends Component {
    handleLogin(e) {
        e.preventDefault();
        var credentials = {};
        credentials.email = this
            .refs
            .email
            .getValue();
        credentials.password = this
            .refs
            .password
            .getValue(); // dispatching action
            
            this.props.onLogin(credentials);
    }

    render() {

        return (
            <div
                style={{
                width: "400px",
                margin: "0px auto",
                textAlign: "center"
            }}>
                <Paper zDepth={3}>
                    <h1>Login</h1>
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
                </Paper>
            </div>
        )
    }
}
export default Login;
