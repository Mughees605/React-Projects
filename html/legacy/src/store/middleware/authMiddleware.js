import AuthActions from "./../actions/authActions";
import LocalStorageManager from '../../services/localStorageManager'
import { browserHistory } from 'react-router';

export default class AuthMiddleware {

    // isLoggedIn 
    static isLoggedIn() {
        return (dispatch) => {
            let user = LocalStorageManager.getUser();
            // This is user is temporary until we implement authentication with cookie
            
            user = {
                id:"123",
                name:"Hello World",
                age:45
            }
            if(user){
                browserHistory.push("/dashboard")
                dispatch(AuthActions.signinSuccessful(user))
            }
            else {
                console.log("not logged in ");
                browserHistory.push("/login")
                dispatch(AuthActions.signinRejected("User not logged in"))
            }
        }
    }

    

    

    
}


    
