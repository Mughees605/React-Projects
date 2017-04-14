import React, {Component} from "react";
import {SignUpAction} from "../store/action";
import {connect} from "react-redux";
import SignUp from '../components/signup';

function mapStateToProps(state) {
    return {isSignUp: state.isSignUp}
}

class SignUpCont extends Component {

    _handleSignup(userObj) {
        console.log(userObj, "userDataaa");
        this.props.dispatch(SignUpAction.SignUp(userObj));
    }

    render() {
        return (
            <div>
                <SignUp onSignup={this._handleSignup.bind(this)}/>;
            </div>
        );
    }
}
export default connect(mapStateToProps)(SignUpCont);