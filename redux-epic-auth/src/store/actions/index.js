export default class signUpLogin {
    static SIGNUP = "SIGNUP";
    static SIGNUP_SUCCECFUL = "SIGNUP_SUCCECFUL";
    static SIGNUP_REJECTED = "SIGNUP_REJECTED";
    static signup(credentials){
        return {type:signUpLogin.SIGNUP,payload}
    }
    static signupSuccec(){
        return {type:signUpLogin.SIGNUP_SUCCECFUL}
    }
}
