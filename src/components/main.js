import React from "react"

class Main extends React.Component{
    render(){
        return (
            <div>
                Main component
                {this.props.children}
            </div>
        )
    }
}
export default Main