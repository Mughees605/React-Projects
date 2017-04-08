import firebase from "../../firebase";
import {hashHistory} from "react-router";
export class SignUpAction {

    static SIGNUP = "SIGNUP";
    static SIGN_UP_SUCESS = "SIGN_UP_SUCESS"
    static SIGN_UP_UNSUCESS = "SIGN_UP_UNSUCESS"
    static LOGIN = "LOGIN";

    static SignUp(credentials) {
        return (dispatch) => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(credentials.email, credentials.password)
                .then((res) => {
                    dispatch(SignUpAction.SignUpSucess());
                    hashHistory.push("/");
                })
                .catch((err) => {
                    alert(err.message)
                    dispatch(SignUpAction.SignUpUnSucess());
                });
        }
    }
    static SignUpSucess() {
        return {type: SignUpAction.SIGN_UP_SUCESS}
    }
    static SignUpUnSucess() {
        return {type: SignUpAction.SIGN_UP_UNSUCESS}
    }
}