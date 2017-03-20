var React = require('react');

var Menu = React.createClass({
    render:function(){
        let menu = ["Home","Contact us","About","Gallery"];
        return (

            <div>
              {menu.map(function(val,i){
               return (
                   <div key = {i}>
                       <Link label = {val}></Link>
                   </div>
               )
              })}
            </div>
            
        )
    }
});
var Link = React.createClass({
    
    render:function(){
        const URL = "/"+this.props.label.toLowerCase().trim().replace(" ",'-');
          
          return (
             <div>
             <a href={URL}>{this.props.label}</a>
             <br/>
             </div>      
          )

    }
})
module.exports = Menu;