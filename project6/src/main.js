var React = require("react");
var request = require('axios')


var Main = React.createClass({
    handleData:function(e){
        e.preventDefault();
    console.log(this.state.options[0].name);
    },
     componentDidMount() {
    request({url: this.props.url})
      .then(response=>response.data)
      .then(body => {
        if(!body){
          return console.error('Failed to load')
        }
      this.setState({options: body})
      })
      .catch(console.error)
  },
    getInitialState:function(){
     return {
         options : "mughees"
     }
    },

    
    render:function(){
        return (
        <form onClick = {this.handleData}>
        <input type="text" ref = "name"/>
        <button>Get</button>
        <p>{this.state.options}</p>
        </form>
        )
    }
})
module.exports = Main;