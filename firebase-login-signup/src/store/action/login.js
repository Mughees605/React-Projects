export class LoginAction{
    static LOGIN = "LOGIN";
    static LOGIN_SUCCESS = "LOGIN_SUCCESS";
    static LOGIN_UN_SUCCESS = "LOGIN_UN_SUCCESS";

    static login(credentials){
        return {
            type:LoginAction.LOGIN,
            payload:credentials
        }
    }
    static loginSucess(){
        return {
            type:LoginAction.LOGIN_SUCCESS,
            payload:null
        }
    }
    static loginUnSucess(){
        return {
            type:LoginAction.LOGIN_UN_SUCCESS,
            payload:null
        }
    }
}