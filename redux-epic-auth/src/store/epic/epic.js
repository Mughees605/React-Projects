import { Observable } from "rxjs";  
import signUpLogin from "../actions/index.js"

class CounterEpic{

    // increment = (action$)=>
    //     action$.ofType(CounterAction.INCREMENT_ASYNC)
    //     .delay(1000)
    //     .switchMap(({payload})=>{
    //         return Observable.of({
    //             type:CounterAction.INCREMENT,
    //             payload:null    
    //         })
    //     })

    //     decrement = (action$)=>
    //     action$.ofType(CounterAction.DECREMENT_ASYNC)
    //     .delay(1000)
    //     .switchMap(({payload})=>{
    //         return Observable.of({
    //             type:CounterAction.DECREMENT,
    //             payload:null
    //         })
    //     })
    
}
export let counterEpic = new CounterEpic();