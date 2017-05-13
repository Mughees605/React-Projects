import AuthActions from "./../actions/authActions";

const INITIAL_STATE = {
    authUser: {},
    isAuthenticated : false,
    isProcessing : false,
    isError : false,
    errorMessage: {}
}

function AuthReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AuthActions.SIGNIN_SUCCESSFUL:
            return {...state, isProcessing: false, isAuthenticated: true, isError : false, authUser: action.payload ,  errorMessage: {}};
        case AuthActions.SIGNIN_REJECTED:
            return {...state, isProcessing: false, isAuthenticated: false, authUser:{}, isError : true, errorMessage: action.payload};
        case AuthActions.ISLOGGEDIN:
            return {...state, isProcessing: false, isAuthenticated: false, authUser:action.payload};
        default:
            return state;
    }
}

export default AuthReducer;