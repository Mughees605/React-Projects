import React, { Component } from "react"
import { AppBar } from "material-ui";
import { connect } from "react-redux";








class Main extends Component {

    render() {
        return (
            <div style={{ margin: "0px" }}>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                {this.props.children}
            </div>
        )
    }
}
export default Main;
