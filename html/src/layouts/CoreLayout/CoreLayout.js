import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './CoreLayout.scss'
import './TemporaryGlobals.scss'
import {connect} from 'react-redux'
import {loginAttempt} from 'redux/actions/userActions'

class CoreLayout extends Component {
  componentDidMount() {
    this.props.loginAttempt()
  }

  render() {
    const {children} = this.props

    return (
      <div className={s.coreLayout}>
        {children}
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element,
}

export default connect(() => ({}), {loginAttempt})(CoreLayout)
