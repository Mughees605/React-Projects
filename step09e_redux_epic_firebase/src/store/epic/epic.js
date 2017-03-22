import {Observable} from "rxjs";
import firebase from "../../config/index.js"
import {TodoAction} from "../actions/index.js"


const ref = firebase.database().ref().child("todo/");
class TodoEpic {

    addTodo = (action$) => action$
        .ofType(TodoAction.ADD_TODO)
        .switchMap(({payload}) => {

            return Observable
             .fromPromise(ref.push(payload))
             .map((x,e)=>{
                 return {
                     type:TodoAction.TODO_NULL
                 }
             })
        })

}
export let todoEpic = new TodoEpic();