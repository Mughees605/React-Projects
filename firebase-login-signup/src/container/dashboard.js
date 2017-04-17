import React, {Component} from "react";
import {connect} from "react-redux";
import Dashboard from "../components/dashboard.js"
import {hashHistory} from "react-router";

function mapStateToProps(state) {
    return {
        isLogin: state.LoginReducer.isLogin,
    }
}

class DashboardCont extends Component {
    componentWillMount(){
        if(!this.props.isLogin){
            hashHistory.push("/");
        }
        else{
            hashHistory.push("/dashboard");
        }
    }
    render() {
       
        return (
            <div>
                <Dashboard />
                {this.props.children}
            </div>
        )
    }
}
export default connect(mapStateToProps)(DashboardCont);