import React from 'react'
import PropTypes from 'prop-types'
import './DashboardLayout.scss'
import NavHeader from 'components/NavHeader'
import SideMenu from 'components/SideMenu'
import {connect} from 'react-redux'

const DashboardLayout = ({children, fetchingUser}) => (
  <div className='dashboard-continer'>
    <NavHeader/>
    <div className='sidemenu-container container'>
      <SideMenu/>
      <div
        style={{height: '100%', backgroundColor: '#ededed'}}
        className='col-md-10 col-xs-8 col-sm-8'>
        {!fetchingUser ? children : null}
      </div>
    </div>
  </div>
)

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired,
  fetchingUser: PropTypes.bool.isRequired,
}

const mapStateToProps = ({
  user: {
    fetchingUser,
  },
}) => ({
  fetchingUser
})

export default connect(mapStateToProps, {})(DashboardLayout)
