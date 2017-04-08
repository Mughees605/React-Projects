import {Observable} from "rxjs";
import {LoginAction} from "../action/login";
import firebase from "../../firebase";

export class LoginEpic {

    static login = (action$) => action$
        .ofType(LoginAction.LOGIN)
        .switchMap(({payload}) => {
            return Observable
                .fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password))
                .map((user)=>{
                    return {type:LoginAction.LOGIN_SUCCESS, payload:user}
                }).catch((err)=>{
                    return {type:LoginAction.LOGIN_UN_SUCCESS,payload:err}
                })
        })
}
