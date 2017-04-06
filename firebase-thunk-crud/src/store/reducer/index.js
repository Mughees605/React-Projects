import { TodoAction } from "../action"
export var TodoReducer = (state = {push:false,getData:false,data:{}}, action) => {
    switch (action.type) {
        case TodoAction.ADDTODO:
            return {...state,push:true}
        case TodoAction.GETTODO:
        return {...state,getData:true,data:action.payload};
            default :
            return state
    }
}