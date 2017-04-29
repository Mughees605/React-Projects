import AuthActions from "./../actions/authActions";
import LocalStorageManager from '../../services/localStorageManager'

export default class AuthMiddleware {

    // isLoggedIn 
    static isLoggedIn() {
        return (dispatch) => {
            let user = LocalStorageManager.getUser();
            if(user){
                dispatch(AuthActions.signinSuccessful(user))
            }
            else {
                console.log("not logged in ");
                dispatch(AuthActions.signinRejected("User not logged in"))
            }
        }
    }

    

    

    
}


    
