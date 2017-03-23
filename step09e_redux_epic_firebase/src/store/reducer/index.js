import { TodoAction } from "../actions"
export var TodoReducer = (state = [], action) => {
    switch (action.type) {
        case TodoAction.GET_TODO_ADDED:
            return {
                ...state,
                payload: action.payload.parsedTodo
            }
        default:
            return state;
    }
}
