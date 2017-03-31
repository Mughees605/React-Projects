import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ajaxAction} from './store/action/action-ajax'
import {Paper, TextField, RaisedButton} from "material-ui"


class App extends Component {
    render() {
        return (
            <div></div>
        );
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
