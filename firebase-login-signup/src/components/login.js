import React, {Component} from "react";
import {Paper} from "material-ui";
import LoginCont from "../container/login"

class Login extends Component {
  
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
                    <LoginCont/>
                </Paper>
            </div>
        )
    }
}
export default Login;
