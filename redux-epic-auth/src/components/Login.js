import React, {Component} from "react";

class Login extends Component {
    handleSignUp(e) {
        e.preventDefault();
        var credential = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        alert(credential.email);
    }

    render() {
        return (
            <div>
                Login
                <form
                    onSubmit={this
                    .handleSignUp
                    .bind(this)}>
                    <h1>SIGN UP</h1>
                    <input type="text" ref="email"/><br/><br/>
                    <input type="password" ref="password"/><br/><br/>
                    <button>signup</button>
                </form>
            </div>
        )
    }
}
export default Login;
