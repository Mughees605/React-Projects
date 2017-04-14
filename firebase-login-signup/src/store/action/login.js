import firebase from "../../firebase";
export class LoginAction {
    static LOGIN = "LOGIN";
    static LOGIN_SUCCESS = "LOGIN_SUCCESS";
    static LOGIN_UN_SUCCESS = "LOGIN_UN_SUCCESS";

    static login(credentials) {
        return (dispatch) => {
            firebase
                .auth()
                .signInWithEmailAndPassword(credentials.email,credentials.password)
                .then((res) => {

                    dispatch(LoginAction.loginSucess());

                })
                .catch((err) => {

                    alert(err.message);
                    dispatch(LoginAction.loginUnSucess());
                })
        }
    }
    static loginSucess() {
        return {type: LoginAction.LOGIN_SUCCESS, payload: null}
    }
    static loginUnSucess() {
        return {type: LoginAction.LOGIN_UN_SUCCESS, payload: null}
    }
}