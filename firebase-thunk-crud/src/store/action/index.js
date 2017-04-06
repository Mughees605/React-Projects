import firebase from "../../firebase"
export class TodoAction {

    static ADDTODO = "ADDTODO";
    static ADDFIREBASE = "ADDFIREBASE";
    static FETCHINGDATA = "FETCHINGDATA";
    static GETTODO = "GETTODO";

    static addTodo() {
        return {
            type: TodoAction.ADDTODO,
        }
    }
    static addFirebase(todo) {
        var todoRef = firebase.database().ref().child("todo/").push(todo);
        return (dispatch) => {
            todoRef.then(() => {
                dispatch(TodoAction.addTodo())
            }).catch((err) => {
                alert(err)
            })
        }
    }
    static getTodo(data) {
        return {
            type: TodoAction.GETTODO,
            payload: data
        }
    }
    static fetchingData() {
        return (dispatch) => {
            var getData = firebase.database().ref().child("todo/");
            getData.on("value", (snapshot) => {
                var arr = []
                var obj = snapshot.val();
                for(var key in obj){
                    arr.push(obj[key]);
                }
                dispatch(TodoAction.getTodo(arr));
            })
        }


    }
}