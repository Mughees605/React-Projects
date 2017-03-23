import { Observable } from "rxjs";
import firebase from "../../config/index.js"
import { TodoAction } from "../actions/index.js"

const ref = firebase
    .database()
    .ref()
    .child("todo/");
class TodoEpic {

    addTodo = (action$) => action$
        .ofType(TodoAction.ADD_TODO)
        .switchMap(({ payload }) => {

            return Observable
                .fromPromise(ref.push(payload))
                .map((x, e) => {
                    return { type: TodoAction.TODO_NULL }
                })
        })
    getTodos = (action$) => action$
        .ofType(TodoAction.GET_TODO)
        .switchMap(({ payload }) => {
            return new Observable((observer) => {
                ref.on("value", (snapshot) => {
                    var parsedTodo = [];
                    var todos = snapshot.val() || {};
                    for (var key in todos) {
                        parsedTodo.push(todos[key])
                    }
                    observer.next({
                        type: TodoAction.GET_TODO_ADDED,
                        payload: parsedTodo
                    })
                })
            })
        })
}
export let todoEpic = new TodoEpic();