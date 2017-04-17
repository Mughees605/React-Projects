import React, { Component } from "react"
import { FlatButton, AppBar, IconButton } from "material-ui";
import { connect } from "react-redux";
import { Drawer, RaisedButton, MenuItem } from 'material-ui';







class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });



    render() {
        return (
            <div>
                {/*<RaisedButton
                    label="Open Drawer"
                    onTouchTap={this.handleToggle}
                />*/}
                 <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onTouchTap={this.handleToggle}
                    />
                <Drawer
                    containerStyle={{ height: 'calc(100% - 64px)', top: 64 }}
                    docked={true}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })
                    }
                >
                   
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
                {this.props.children}
            </div>
        )
    }
}
export default Main;
