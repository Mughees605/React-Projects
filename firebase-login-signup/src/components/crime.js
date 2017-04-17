import React,{Component} from "react";
import { FlatButton, AppBar, IconButton, TextField, Paper, RaisedButton } from "material-ui";

class Crime extends Component {
    constructor(props) {
        super(props)
    }

    handleCrimeData() {
        var userObj = {};
        userObj.name = this.refs.name.getValue();
        userObj.age = this.refs.age.getValue();
        userObj.address = this.refs.address.getValue();
        this.props.onAdd(userObj);
    }

    render() {
        return (
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
                            <RaisedButton
                                type="submit"
                                onClick={this.handleCrimeData.bind(this)}
                                fullWidth={true}
                            >Submit Report</RaisedButton>
                        </div>
                    </Paper>
                </div>
        )
    }
}
export default Crime;