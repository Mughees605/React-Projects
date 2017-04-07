import {loginAction} from "../action"
const INITIAL_STATE = {
     isSignUp:false,
}
export var SignUpReducer = (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case loginAction.SIGN_UP_SUCESS:
        return {...state,isSignUp:true};
        case loginAction.SIGN_UP_UNSUCESS:
        return {...state,isSignUp:false}
        default:
        return state
    }
    
}
