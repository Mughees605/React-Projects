// var actions = require("./action-demo")
import {CounterAction} from "../../store/actions/index"


describe("CounterAction", () => {

    it("Increment",()=>{
        expect(CounterAction.Increment().type).toEqual(CounterAction.INCREMENT)
    })
    it("Decrement",()=>{
        expect(CounterAction.Decrement("mughees").payload).toEqual("mughees")
    })

})
