
export class CounterAction {

    static INCREMENT = "INCREMENT";
    static DECREMENT = "DECREMENT";

    static Increment = () => {
        return {
            type: CounterAction.INCREMENT
        }
    }
    static Decrement = (number) => {
        return {
            type: CounterAction.DECREMENT,
            payload:number
        }
    }
    static incrementAsync = ()=>{
        return (dispatch)=>{
          setTimeout(()=>{
              dispatch(CounterAction.Increment());
          },1000)
        }
    }
     static decrementAsync = ()=>{
        return (dispatch)=>{
          setTimeout(()=>{
              dispatch(CounterAction.Decrement());
          },1000)
        }
    }

}
