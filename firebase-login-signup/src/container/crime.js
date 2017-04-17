import React, {Component} from "react";
import {connect} from "react-redux";
import Crime from "../components/crime.js"
import {MissingAction} from "../store/action/missing";
import {hashHistory} from "react-router";

class CrimeCont extends Component {
    render() {
       
        return (
            <div>
                <Crime/>
            </div>
        )
    }
}
export default connect()(CrimeCont);