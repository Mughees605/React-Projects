import React, {Component} from 'react'
import {FormControl, FormGroup, MenuItem, Navbar, NavDropdown} from 'react-bootstrap'
import './NavHeader.scss'
import searchIcon from 'static/images/search-icon.jpg'
import notifyIcon from 'static/images/notify-icon.jpg'

class NavHeader extends Component {
  render() {
    return (
      <div className='nav-header-container'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h1 className='brand-name'>Pipeline</h1>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form
              pullLeft
              className='searchbar-group'>
              <FormGroup className='search-engien'>
                <img
                  src={searchIcon}
                  alt='Search icon'
                  className='search-icon'/>
                <FormControl
                  type='text'
                  className='search-engien'
                  placeholder='Enter Your Search..'/>
                <img
                  src={notifyIcon}
                  alt='Notify icon'
                  className='notify-icon'/>
                <span className='line'></span>
              </FormGroup>
            </Navbar.Form>
            <nav className='profile'>
              <span className='pgrp'>
                <p className='username'>Connor Black</p><br/>
                <p className='user-address'>Connor@digitalfreelancer.io</p>
              </span>
              {/*<span className='p-image-grp'>*/}
              <a
                href=''
                className='profile-img'><img
                  src='https://vignette2.wikia.nocookie.net/mafiagame/images/2/23/Unknown_Person.png/revision/latest?cb=20151119092211'
                  alt='Profile Img'
                  className='profile-img'/></a>
              <NavDropdown
                eventKey={3}
                id='basic-nav-dropdown'
                pullRight
                className='dropdown-bar'
                title=''>
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
              {/*</span>*/}
            </nav>

          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}

export default NavHeader
