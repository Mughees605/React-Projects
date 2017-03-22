import {TodoAction} from "../actions"
export var TodoReducer = (state = {},action)=>{
    switch(action.type){
        case TodoAction.ADD_TODO:
        return {
            ...state,
            text:action.payload
        }
        default :
        return state;
    }
}
