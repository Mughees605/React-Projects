import {SignUpAction} from "../action"
import {LoginAction} from "../action/login"
const INITIAL_STATE = {
     isSignUp:false,
}
export var SignUpReducer = (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case SignUpAction.SIGN_UP_SUCESS:
        return {...state,isSignUp:true};
        case SignUpAction.SIGN_UP_UNSUCESS:
        return {...state,isSignUp:false}
        default:
        return state
    }
    
}
export var LoginReducer = (state={isLogin:false,user:{}},action)=>{

    switch(action.type){
     case LoginAction.LOGIN_SUCCESS:
     return {...state,isLogin:true,user:action.payload};
     default:
     return state;
    }
}
