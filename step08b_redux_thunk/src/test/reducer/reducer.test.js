import {counterReducer} from "../../store/reducer";

describe("CounterReducer",()=>{
    it("Increment of 1",()=>{
        expect(counterReducer(1.3,{type:"INCREMENT"})).toEqual(2.3)
    })
    it("Decrement of 1",()=>{
        expect(counterReducer(1,{type:"DECREMENT"})).toEqual(0)
    })

})