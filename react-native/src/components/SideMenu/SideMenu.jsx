import React, { Component } from 'react';
import { Link } from 'react-router';
import './SideMenu.css';

class SideMenu extends Component {
  render() {
    return (
      <div className="sidemenu-container">
        <div style={{ backgroundColor: 'rgb(46, 50, 90)', height: '100vh', paddingLeft: 0 }} className="col-md-2 col-xs-4 col-sm-4 sidebar-offcanvas" id="sidebar" role="navigation">
          <ul className="nav">
            <li><Link to='/dashboard/leads' className="sidemenu-a-color">
              <span className="glyphicon glyphicon-user"></span> Leads</Link>
            </li>
            <li><Link to='/dashboard/salesSteps' className="sidemenu-a-color">
              <span className="glyphicon glyphicon-random"></span>Sales Steps</Link>
            </li>
            <li><Link to='/dashboard/leadsLists' className="sidemenu-a-color">
              <span className="glyphicon glyphicon-list-alt"></span> Leads Lists</Link>
            </li>
            <li><Link to='/dashboard/templates' className="sidemenu-a-color">
              <span className="glyphicon glyphicon-edit"></span>Templates</Link
            ></li>
          </ul>
        </div>
      </div>

    );
  }
}

export default SideMenu;