import React, {Component} from "react";
import {connect} from "react-redux";
import Dashboard from "../components/dashboard.js"
import {MissingAction} from "../store/action/missing";
import {hashHistory} from "react-router";

function mapStateToProps(state) {
    return {
        isLogin: state.LoginReducer.isLogin,
        url:state.MissingReducer.photoURL.photo,
        percentage:state.MissingReducer.photoURL.percentage
    }
}

class DashboardCont extends Component {
    // componentWillMount(){
    //     if(!this.props.isLogin){
    //         hashHistory.push("/");
    //     }
    //     else{
    //         hashHistory.push("/dashboard");
    //     }
    // }
     handleMissingPerson(obj){
            this.props.dispatch(MissingAction.missingData(obj))
        }
        handleMissingImage(img){
            this.props.dispatch(MissingAction.missingImage(img));
        }
    render() {
       
        return (
            <div>
                <Dashboard onAdd = {this.handleMissingPerson.bind(this)} onImage={this.handleMissingImage.bind(this)} photo={this.props.url} per={this.props.percentage}/>
            </div>
        )
    }
}
export default connect(mapStateToProps)(DashboardCont);