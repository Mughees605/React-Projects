import {MissingAction} from "../action/missing.js"
const INITIAL_STATE = {
    photoURL:"",
}
export var MissingReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case MissingAction.Missing_Image_Done:
        return {...state,photoURL:action.payload,}
        default:
        return state;
    }
}