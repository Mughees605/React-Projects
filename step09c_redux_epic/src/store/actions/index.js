
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