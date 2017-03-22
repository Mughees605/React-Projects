export class TodoAction {
    static ADD_TODO = "ADD_TODO";
    static GET_TODO = "GET_TODO";
    static TODO_NULL = "TODO_NULL";
    static GET_TODO_ADDED = "GET_TODO_ADDED";
  
    static addTodo = (todo) => {
        return {type: TodoAction.ADD_TODO,payload:todo}
    }

    static getTodo = ()=>{
        return { type:TodoAction.GET_TODO}
    }
}
