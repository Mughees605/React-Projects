import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AuthMiddleware } from '../../store'
import { browserHistory } from 'react-router';


function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        isLoggedIn: () => dispatch(AuthMiddleware.isLoggedIn())
    };
}

class App extends Component {

  constructor(){
    super();
    setTimeout(() => {
        this.props.isLoggedIn()
    },0);

  }
  /*
  shouldComponentUpdate(nextProps, nextState){
    
    //return nextProps.isAuthenticated != this.props.isAuthenticated;
    console.log("shouldComponentUpdate >>>>> nextProps >>>>>>..",nextProps);
    console.log("shouldComponentUpdate >>>>>> nextState >>>>>..",nextState);
    console.log("shouldComponentUpdate >>>>>> isAuthenticated >>>>>..",this.props.isAuthenticated);
    return nextProps.isAuthenticated != this.props.isAuthenticated;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("hello >>>>> nextProps >>>>>>..",nextProps);
    console.log("hello >>>>>> nextState >>>>>..",nextState);
    if(!nextProps.isAuthenticated){
      console.warn("Not Authenticated");
      //Uncomment it and it will move to login page if not authenticated
      browserHistory.push("/login");
    }
    else {
      console.error("Authenticated -- Go ahead");
      browserHistory.replace("/dashboard");
    }
  }

*/
  render() {
    return (
        <div className="app">
            <div>
              {this.props.children}
            </div>
        </div>
      
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)