import React from "react";
import {connect} from 'react-redux';
import {ajaxAction} from '../store/action/action-ajax';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    Avatar
} from 'material-ui';

function mapStateToProps(state) {
    return {data: state.ajaxReducer.data}
}
function matchDispatchToProps(dispatch) {
    return {
        allUsers: () => {
            dispatch(ajaxAction.getAllUsers())
        }
    }
}
class AllUsersCont extends React.Component {
    constructor(props) {
        super(props)

        this
            .props
            .allUsers();
        this.renderDisplay = this
            .renderDisplay
            .bind(this);
    }
    renderDisplay() {
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                              <TableHeaderColumn>Free Code Camper</TableHeaderColumn>
                            <TableHeaderColumn>Rank</TableHeaderColumn>                       
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Last Update</TableHeaderColumn>
                           
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.data.map((val,id)=>{
                           return(
                                <TableRow key={id} selectable={false}>
                                <TableRowColumn><Avatar src={val.img} /></TableRowColumn>
                                <TableRowColumn>{id+1}</TableRowColumn>
                                <TableRowColumn>{val.username}</TableRowColumn>
                                <TableRowColumn>{val.lastUpdate}</TableRowColumn>
                            </TableRow>
                           )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
    render() {

        if (this.props.data) {
            return this.renderDisplay()
        } else {
            return (
                <span>Loading..............</span>
            )
        }
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(AllUsersCont);
