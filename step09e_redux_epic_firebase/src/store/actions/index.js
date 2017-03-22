export class TodoAction {
    static ADD_TODO = "ADD_TODO"
    static TODO_NULL = "TODO_NULL"
  
    static addTodo = (todo) => {
        return {type: TodoAction.ADD_TODO,payload:todo}
    }
}
