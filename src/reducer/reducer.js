export var signUpReducer = (state = {},action)=>{
    switch(action.type){
        case "SIGNUP":
        var newState = Object.assign({},state,{isSign:action.text})
        return newState;
        default:
        return state
    }
}