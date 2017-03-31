import React, {Component} from 'react';
import {Paper, TextField, RaisedButton, AppBar} from "material-ui"

class App extends Component {
    render() {
        return (
            <div>
                <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/> 
                {this.props.children}
            </div>
        );
    }
}
export default App;
