import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, NavDropdown, MenuItem } from 'react-bootstrap';
import './NavHeader.css';

class NavHeader extends Component {
  render() {
    return (
      <div className="nav-header-container">
        <Navbar >
          <Navbar.Header>
            <Navbar.Brand>
              <h1 className="brand-name">Pipeline</h1>
            </Navbar.Brand>
            <Navbar.Toggle className='toggle-bar'/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft className='searchbar-group'>
              <FormGroup className="search-engien">
                <img src="/assets/images/search-icon.jpg" alt="Search icon" className='search-icon' />
                <FormControl type="text" className="search-engien" placeholder="Enter Your Search.." />
                {/*<img src="/assets/images/notify-icon.jpg" alt="Notify icon" className='notify-icon' />*/}
                <NavDropdown eventKey={5} id="basic-nav-dropdown" pullRight className='dropdown-bar' title={<i className="glyphicon glyphicon-bell notify-icon"></i>} noCaret>
                 <div style={{width:"434px",height: "77px",borderRadius: "5px",border:"solid 1px #eaeaea;", padding:"20px"}}>
                   <i className="glyphicon glyphicon-user" style={{fontSize:"40px",color:"#8dc73f"}}></i>
                   <span>Mughees</span>
                 </div> 
                </NavDropdown>
                <span className='line'></span>
                
              </FormGroup>
            </Navbar.Form>
            <nav className='profile'>
              <span className='pgrp'>
                <p className='username'>Connor Black</p><br />
                <p className='user-address'>Connor@digitalfreelancer.io</p>
              </span>
              {/*<span className='p-image-grp'>*/}
                <a href="" className='profile-img'><img src="https://vignette2.wikia.nocookie.net/mafiagame/images/2/23/Unknown_Person.png/revision/latest?cb=20151119092211" alt="Profile Img" className='profile-img' /></a>
                <NavDropdown eventKey={3} id="basic-nav-dropdown" pullRight className='dropdown-bar' Caret>
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
              {/*</span>*/}
            </nav>

          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}

export default NavHeader;