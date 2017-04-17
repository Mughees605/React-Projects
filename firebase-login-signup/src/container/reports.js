import React, {Component}from "react";
import {connect} from "react-redux";
import Missing from "../components/reports"
function mapStateToProps(state) {
    return {
        data: state.ReportsReducer.data,
    }
}

class ReportsCont extends Component{
    render(){
        return(
            <div>
               
                <Missing {...this.props}/>
            </div>
        )
    }
}
export default connect(mapStateToProps)(ReportsCont);