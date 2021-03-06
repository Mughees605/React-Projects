import React, {Component} from "react"
import {Drawer, MenuItem, AppBar} from 'material-ui';
import {Link} from "react-router";
class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleClose = () => this.setState({open: false});
    render() {
        return (
            <div style={{
                margin: "0px"
            }}>
                <AppBar
                    title="Crime report app"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onTouchTap={this.handleToggle}/>
                <Drawer
                    containerStyle={{
                    height: 'calc(100% - 64px)',
                    top: 75
                }}
                    docked={true}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <Link to="/dashboard/missing">
                        <MenuItem onTouchTap={this.handleClose}>Missing Reports</MenuItem>
                    </Link>
                    <Link to="/dashboard/crime">
                        <MenuItem onTouchTap={this.handleClose}>Crime Reports</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem>Go to main</MenuItem>
                    </Link>
                     <Link to="/dashboard/reports">
                        <MenuItem>View Reports</MenuItem>
                    </Link>
                </Drawer>
            </div>
        )
    }
}
export default DashBoard;