import React, {Component} from "react";
import {TextField, Paper, RaisedButton} from "material-ui";
import {LoginAction} from "../store/action/login";
import {connect} from "react-redux";
import {hashHistory} from "react-router";

function mapStateToProps(state){
 return {
     isLogin:state.LoginReducer.isLogin
 }
}


class LoginCont extends Component {
     componentDidMount() {
      if(this.props.isLogin){
          hashHistory.replace("/dashboard");
      }
      else{
          hashHistory.replace("/")
      }
    }
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
            this.props.dispatch(LoginAction.login(credentials)); // dispatching action
    }
    render() {
        return (
            <div>
                {console.log(this.props.isLogin,"islogin")}
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
export default connect(mapStateToProps)(LoginCont);