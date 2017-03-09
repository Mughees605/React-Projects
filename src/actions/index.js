var { myFirebase } = require("../firebase/firebase.js")
import { hashHistory } from "react-router"
var signUpStart = (text) => {
    return {
        type: "SIGNUP",
        text
    }
}

export var signUpAction = (credentials) => {
    return (dispatch, getState) => {
        return myFirebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.pass).then((result) => {
            console.log("auth worked");
            hashHistory.push("/login");
            dispatch(signUpStart(true))
        }).catch((error) => {
            console.log(error.message);
            dispatch(signUpStart(false))
        })
    }
}
export var LoginAction = (credentials) => {
    return (dispatch, getState) => {
        return myFirebase.auth().signInWithEmailAndPassword(credentials.email, credentials.pass).then((result) => {
            console.log(result);
        })
    }
}