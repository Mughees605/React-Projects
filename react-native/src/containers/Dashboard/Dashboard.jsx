import React, { Component } from 'react';
import './Dashboard.css';
import { NavHeader, SideMenu } from '../../components'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-continer">
                <NavHeader />
                <div className="sidemenu-container container">
                    <SideMenu />
                    <div  style={{ height: '100vh' }} className="col-md-10 col-xs-8 col-sm-8">
                        {this.props.children ? React.cloneElement(this.props.children, { ...this.props }) : this.props.children}
                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;