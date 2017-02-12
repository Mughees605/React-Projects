import React from "react"

class TimeWrapper extends React.Componen{
    constructor(props){
        super(props)
        this.state = {timeLeft:null,timer:null}
        this.startTimer = this.startTimer.bind(this);

    }
    startTimer(timeLeft){
        clearInterval(this.state.timer);
        let timer = setInterval(()=>{
        var timeLeft = this.state.timeLeft-1
        if(timeLeft == 0){
           clearInterval(timer);
         }
         return this.setState({
             timeLeft:timeLeft
         })
        },1000)
    }
    render(){

    }
}

class Timer extends React.Component{

    render(){

    }
}
class Button extends React.Component{
    startTimer(event){

    }
    render(){

    }
}
export default TimeWrapper