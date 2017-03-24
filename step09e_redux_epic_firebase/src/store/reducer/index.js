import { TodoAction } from "../actions"

const INITIAL_STATE = ["text"] 


export var TodoReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoAction.GET_TODO_ADDED:
            return {
                ...state,
                payload: action.payload.parsedTodo
            }
            case TodoAction.DELETE_TODO:
            return state
        default:
            return state;
    }
}
