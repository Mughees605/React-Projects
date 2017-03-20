import firebase from "../../firebase/index.js"
import axios from "axios";
export var addTodo = (todo) => {
    return {type: "ADD_TODO", todo};
};

export var addTodoFirebase = (todo) => {
  return(dispatch)=>{
      var todoRef = firebase.database().ref().child("todo/").push(todo);
      
      return todoRef.then(()=>{
          dispatch(addTodo(todo))
      })
  }
}