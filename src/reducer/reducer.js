export var signUpReducer = (state = {},action)=>{
    switch(action.type){
        case "SIGNUP":
        var newState = Object.assign({},state,{isSign:action.text})
        return newState;
        case "LOGIN":
        return "succecfully login"
        default:
        return state
    }
}