import { Observable } from "rxjs";
import firebase from "../../config/index.js"
import { TodoAction } from "../actions/index.js"

const ref = firebase.database().ref('todoApp/todo');
class TodoEpic {

    addTodo = (action$) => action$
        .ofType(TodoAction.ADD_TODO)
        .switchMap(({ payload }) => {

            return Observable
                .fromPromise(ref.push(payload))
                .map((x, e) => {
                    return { type: TodoAction.TODO_NULL }
                }).catch((err) => { console.log(err) })
        })
    getTodos = (action$) => action$
        .ofType(TodoAction.GET_TODO)
        .switchMap(({ payload }) => {
            return new Observable((observer) => {
                ref.on("value", (snapshot) => {
                    // var parsedTodo = [];
                    // var todos = snapshot.val() || {};
                    // for (var key in todos) {
                    //     parsedTodo.push(todos[key])
                    // }
                    observer.next({
                        type: TodoAction.GET_TODO_ADDED,
                        payload: {
                            key: snapshot.key,
                            parsedTodo: snapshot.val()
                        }
                    })
                })
            })
        })
    deleteTodo = (action$) => action$
        .ofType(TodoAction.DELETE_TODO)
        .switchMap(({ payload }) => {
            return Observable
                .fromPromise(ref.child(payload).set(null))
        }).map((x) => {
            return { type: TodoAction.TODO_NULL }
        })
}
export let todoEpic = new TodoEpic();