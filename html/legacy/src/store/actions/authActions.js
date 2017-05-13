export default class AuthActions {

    static SIGNIN = 'SIGNIN';
    static SIGNIN_SUCCESSFUL = 'SIGNIN_SUCCESSFUL';
    static SIGNIN_REJECTED = 'SIGNIN_REJECTED';
    
    static ISLOGGEDIN = 'ISLOGGEDIN';

    //static NULL = 'NULL';


    static signinSuccessful(authUser) {
        return {
            type: AuthActions.SIGNIN_SUCCESSFUL,
            payload: authUser
        }
    }

    static signinRejected(error) {
        return {
            type: AuthActions.SIGNIN_REJECTED,
            payload: error
        }
    }
    
    static isLoggedIn(user) {
        return {
            type: AuthActions.ISLOGGEDIN,
            payload: user
        }
    }

    
}