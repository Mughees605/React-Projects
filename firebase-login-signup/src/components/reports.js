import React, {Component} from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    Avatar
} from 'material-ui'

class Reports extends React.Component {
    render() {
        return (
            <div>Reports
                <Table>
                    <TableHeader displayRowCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Image</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>age</TableHeaderColumn>
                            <TableHeaderColumn>City</TableHeaderColumn>
                            <TableHeaderColumn>Report Type</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this
                            .props
                            .data
                            .map((val, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableRowColumn><Avatar src={val.image}/></TableRowColumn>
                                        <TableRowColumn>{val.name}</TableRowColumn>
                                        <TableRowColumn>{val.age}</TableRowColumn>
                                        <TableRowColumn>{val.address}</TableRowColumn>
                                        <TableRowColumn>Missing</TableRowColumn>
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </div>

        )
    }
}
export default Reports;