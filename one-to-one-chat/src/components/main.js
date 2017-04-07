import React, {Component} from "react"
import {FlatButton, AppBar, IconButton} from "material-ui";

const App = () => (
  <AppBar
    title={<span>Title</span>}
    iconElementLeft={<IconButton></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
);

class Main extends Component {
    render() {
        return (
            <div>
                <App/>
           {this.props.children}
            </div>
        )
    }
}
export default Main;
