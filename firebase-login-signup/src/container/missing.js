import React, {Component} from "react";
import {connect} from "react-redux";
import Missing from "../components/missing.js"
import {MissingAction} from "../store/action/missing";
import {hashHistory} from "react-router";

function mapStateToProps(state) {
    return {
        url:state.MissingReducer.photoURL.photo,
        percentage:state.MissingReducer.photoURL.percentage
    }
}

class MissingPersonCont extends Component {
     handleMissingPerson(obj){
            this.props.dispatch(MissingAction.missingData(obj))
        }
        handleMissingImage(img){
            this.props.dispatch(MissingAction.missingImage(img));
        }
    render() {
       
        return (
            <div>
                <Missing onAdd = {this.handleMissingPerson.bind(this)} onImage={this.handleMissingImage.bind(this)} photo={this.props.url} per={this.props.percentage}/>
            </div>
        )
    }
}
export default connect(mapStateToProps)(MissingPersonCont);