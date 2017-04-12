import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      gists:null
    }
  }
  componentDidMount() {
    fetch("https://api.github.com/gists")
      .then(res => res.json())
      .then((gists) => {
        this.setState({gists})
      })
  }
  render() {
    const {gists} = this.state;
    return(
      <Router>
        <div>
          {gists ? (
            gists.map((gist,i)=>(
              <Link to={`/g/${gist.id}`} key={i}><div>{gist.description}</div></Link>
            ))
          ):(
            <div>.....Loading</div>
          )}
          <Route exact={true} path="/" render={()=>(<h1>Welcome</h1>)}/>
          {gists && (
            <Route path="/g/:gistid" render={({match})=>( 
              
              <Gist gist={gists.find(g=>g.id === match.params.gistid)}/>
              )}/>
            )}
          
        </div>
      </Router>
    )
  }
}

const Gist=({gist})=>{
 return (
   <div>
    <h1>{gist.description}</h1>
   </div>
 )
}
export default App