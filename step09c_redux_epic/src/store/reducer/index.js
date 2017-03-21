import CounterAction from "../actions"
export var getRepoReducer = (state = [],action)=>{
    switch(action.type){
        case "SEARCH_REPO":
        var data = action.searchData;
        return data
        default :
        return state;
    }

}
export var CounterReducer = (state = 0,action)=>{
    switch(action.type){
        case CounterAction.INCREMENT:
        return state + 1;
        default :
        return state;
    }
}
