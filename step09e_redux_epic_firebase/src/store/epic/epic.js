import {Observable} from "rxjs";
import firebase from "../../config/index.js"
import {TodoAction} from "../actions/index.js"

const ref = firebase
    .database()
    .ref()
    .child("todo/");
class TodoEpic {

addTodo = (action$) => action$
        .ofType(TodoAction.ADD_TODO)
        .switchMap(({payload}) => {

            return Observable
                .fromPromise(ref.push(payload))
                .map((x, e) => {
                    return {type: TodoAction.TODO_NULL}
                })
        })
getTodos = (action$) => action$
        .ofType(TodoAction.GET_TODO)
        .switchMap(({payload}) => {
            return new Observable((observer) => {
                ref.on("child_added", (snapshot) => {
                    observer.next({
                        type: TodoAction.GET_TODO_ADDED,
                        payload: {
                            key: snapshot.key,
                            val: snapshot.val()
                        }
                    })
                })
            })
        })
}
export let todoEpic = new TodoEpic();