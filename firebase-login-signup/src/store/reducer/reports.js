import {ReportsAction} from "../action/reports.js"
const INITIAL_STATE = {
    getData:false,
    data:[]
}
export var ReportsReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ReportsAction.ALL_MISSING_REPORTS_DONE:
        return {...state,getData:true,data:action.payload}
        default:{
          return state;
        }
    }
}