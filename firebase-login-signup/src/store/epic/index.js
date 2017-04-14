import {Observable} from "rxjs";
import {LoginAction} from "../action/login";
import firebase from "../../firebase";

export class LoginEpic {

    static login = (action$) => action$
        .ofType(LoginAction)
        .switchMap(({payload}) => {
            console.log(payload,"cont")
            return Observable
                .fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password))
                .map((user)=>{
                    return Observable.of({type:LoginAction.LOGIN_SUCCESS, payload:user});
                }).catch((err)=>{
                    return {type:LoginAction.LOGIN_UN_SUCCESS,payload:err}
                })
        })

}
