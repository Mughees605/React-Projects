import React from "react"
import {connect} from "react-redux";
var actions = require("../actions/index.js")

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleRegister(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var registerObj = {};
        registerObj.userName = this.refs.username.value;
        registerObj.address = this.refs.address.value;
        registerObj.useremail = this.refs.useremail.value;
        registerObj.city = this.refs.city.value;
        registerObj.bloodGroup = this.refs.select.value;
        dispatch(actions.pushData(registerObj));

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleRegister}>
                    <div>
                        UserName:<br />
                        <input type="text" ref="username" />
                    </div>
                    <div>
                        Addresss:<br />
                        <input type="text" ref="address" />
                    </div>
                    <div>
                        UserEmail:<br />
                        <input type="text" ref="useremail" />
                    </div>
                    <div>
                        City:<br />
                        <input type="text" ref="city" />
                    </div>
                    <div>
                        <button>submit</button>
                    </div>
                    <div>
                        Your blood group
                        <select ref="select">
                            <option value="AB">AB</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="O">O</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect()(Register);