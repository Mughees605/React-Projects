import React, {Component} from "react";
import Login from "../components/login.js";
import {LoginAction} from "../store/action/login";
import {connect} from "react-redux";
import {hashHistory} from "react-router";

function mapStateToProps(state){
 return {
     isLogin:state.LoginReducer.isLogin
 }
}


class LoginCont extends Component {
   componentWillReceiveProps(nextProps){
       if(nextProps.isLogin){
           hashHistory.push("/dashboard");
       }
   }
    handleLogin(obj){
        this.props.dispatch(LoginAction.login(obj))
    }
      
    render() {
        return (
            <div>
                <Login onLogin = {this.handleLogin.bind(this)}/>
            </div>
        )
    }
}
export default connect(mapStateToProps)(LoginCont);