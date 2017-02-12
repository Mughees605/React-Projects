import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,Link} from "react-router"
import About from "./components/About.js";
import Contact from "./components/Contact.js"
import './index.css';

class Nav extends React.Component{
  componentWillReceiveProps(nextProps){
  console.log(nextProps.location);
  }
  render(){
    return (
      <div>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {this.props.children}
    </div>
    
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
       <Route path="contact" component={Contact} />
       <Route path="about" component={About}/>
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
