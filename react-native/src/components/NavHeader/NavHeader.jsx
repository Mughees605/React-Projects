import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Row, Col } from 'react-bootstrap';
import './NavHeader.css';

class NavHeader extends Component {
  render() {
    return (
      <Row className="nav-header-container">
        <Navbar>
          <Col md={2} sm={2} xs={12} >
            <Navbar.Header>
              <Navbar.Brand>
                <h1 className="brand-name">Pipeline</h1>
              </Navbar.Brand>
              <Navbar.Toggle className='toggle-bar' />
            </Navbar.Header>
          </Col>
          <Navbar.Collapse>
            <Col md={6} sm={4} xs={6} className="middle-col">
              <Navbar.Form style={{ border: "none" }}>
                <FormGroup>
                  <Col md={1} sm={1} xs={2}>
                    <img src="/assets/images/search-icon.jpg" alt="Search icon" className='search-icon' />
                  </Col>
                  <Col md={10} sm={10} xs={10}>
                    <FormControl type="text" placeholder="Enter your search here...." className="search-engine" />
                  </Col>
                </FormGroup>
                {' '}
              </Navbar.Form>
            </Col>
            <Col md={4} sm={6} xs={6} className="right-col">

              <div>
                <img src="/assets/images/notify-icon.jpg" alt="Notify icon" className='notify-icon' />
                <span className='line'></span>
                <div className="right-col-userDetail">
                  <p className='username'>Connor Black</p><br />
                  <p className='user-address'>Connor@digitalfreelancer.io</p>
                </div>
                <div className="right-col-profile">
                  <a href="" className='profile-img'><img src="https://vignette2.wikia.nocookie.net/mafiagame/images/2/23/Unknown_Person.png/revision/latest?cb=20151119092211" alt="Profile Img" className='profile-img' /></a>
                </div>
              </div>
            </Col>
          </Navbar.Collapse>
          <Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </Row>

    );
  }
}

export default NavHeader;