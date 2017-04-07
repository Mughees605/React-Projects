import firebase from "../../firebase";
import {hashHistory} from "react-router";
export class loginAction {

    static SIGNUP = "SIGNUP";
    static SIGN_UP_SUCESS = "SIGN_UP_SUCESS"
    static SIGN_UP_UNSUCESS = "SIGN_UP_UNSUCESS"

    static SignUp(credentials) {
        return (dispatch) => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(credentials.email, credentials.password)
                .then((res) => {
                    dispatch(loginAction.SignUpSucess());
                    hashHistory.push("/");
                })
                .catch((err) => {
                    alert(err.message )
                    dispatch(loginAction.SignUpUnSucess());
                });
        }
    }
    static SignUpSucess() {
        return {type: loginAction.SIGN_UP_SUCESS}
    }
    static SignUpUnSucess() {
        return {type: loginAction.SIGN_UP_UNSUCESS}
    }
}