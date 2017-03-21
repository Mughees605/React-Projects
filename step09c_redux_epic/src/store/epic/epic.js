import { Observable } from "rxjs";  
import CounterAction from "../actions/index.js"

class CounterEpic{

    increment = (action$)=>
        action$.ofType(CounterAction.INCREMENT_ASYNC)
        .delay(1000)
        .switchMap(({payload})=>{
            return Observable.of({
                type:CounterAction.INCREMENT,
                payload:null    
            })
        })
    
}
export let counterEpic = new CounterEpic();