import axios from "axios";
export var searchRepo = (searchData) => {
    return {type: "SEARCH_REPO", searchData}
}

export var getRepo = (username) => {

    return (dispatch, getState) => {
        var requestURL = "https://api.github.com/users/" + username + "/repos";
        axios
            .get(requestURL)
            .then((res) => {
                dispatch(searchRepo(res.data)) // dispatch searchRepo
            })
            .catch((err) => {
                alert(err.code)
            })
    }
}
export default class CounterAction {
    static INCREMENT_ASYNC = "INCREMENT_ASYNC";
    static DECREMENT_ASYNC = "DECREMENT_ASYNC";
    static INCREMENT = "INCREMENT";
    static asyncIncrement() {
        console.log("inside action");
        return {type: CounterAction.INCREMENT_ASYNC}
    }
    static asyncDecrement() {
        return {type: CounterAction.INCREMENT_ASYNC}
    }
    static Increment(){
        console.log("increment action");
        return {
            type:CounterAction.INCREMENT
        }
    }
}