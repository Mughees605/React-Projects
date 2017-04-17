import React, { Component } from "react"
import { FlatButton, AppBar, IconButton, TextField, Paper, RaisedButton } from "material-ui";
const App = () => (
    <AppBar
        title={<span>DashBoard</span>}
        iconElementRight={<span><FlatButton label="SignUp" /> <FlatButton label="Login" /></span>}
    />
);
class DashBoard extends Component {
    constructor(props) {
        super(props)
    }

    handleMissingData() {
        var userObj = {};
        userObj.name = this.refs.name.getValue();
        userObj.age = this.refs.age.getValue();
        userObj.address = this.refs.address.getValue();
        userObj.image = this.props.photo;
        this.props.onAdd(userObj);
    }
    handleChange(e) {
        this.props.onImage(e);
    }

    render() {
        return (
            <div>
                <AppBar />
                <div style={{ width: "400px", margin: "0px auto", textAlign: "center" , }}>
                    <h1>Missing Reports</h1>
                    <Paper zDepth={3}>
                        <div style={{padding:"20px", borderRadius:"2px", margin:"10px"}}>
                            <TextField floatingLabelText="Type missing person name" ref="name" fullWidth={true} />
                            <br />
                            <TextField
                                floatingLabelText="type missing person age"
                                ref="age"
                                type="number"
                                fullWidth={true} />
                            <br />
                            <TextField
                                floatingLabelText="Address"
                                ref="address"
                                fullWidth={true} />
                            <br />
                            <TextField
                                ref="pic"
                                type="file"
                                onChange={this.handleChange.bind(this)}
                                fullWidth={true} />
                            <br />
                            {console.log(this.props.per)}
                            <progress value={this.props.per} max='100'></progress>
                            <RaisedButton
                                type="submit"
                                onClick={this.handleMissingData.bind(this)}
                                fullWidth={true}
                            >Submit Report</RaisedButton>
                        </div>
                    </Paper>
                </div>

            </div>
        )
    }
}
export default DashBoard;