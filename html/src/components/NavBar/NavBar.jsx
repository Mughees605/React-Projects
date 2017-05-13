import React, {Component} from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import './NavBar.scss'
import logoImg from 'static/images/logo.png'

class NavBar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <Navbar
          inverse
          collapseOnSelect
          className='navbar-border'>
          <Navbar.Header>
            <a href='#'><img
              src={logoImg}
              alt='DIGITAL FREELANCER'
              className='navbar-logo'/></a>

            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav
              pullRight
              className='navbar-textcolor'>
              <NavItem
                eventKey={1}
                href='#'
                className='navbar-textcolor'>pipeline</NavItem>
              <NavItem
                eventKey={2}
                href='#'>chat</NavItem>
              <NavItem
                eventKey={2}
                href='#'>blog</NavItem>
              <NavItem
                eventKey={2}
                href='#'>sign in</NavItem>
              <NavItem
                eventKey={2}
                href='#'>sign up</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
