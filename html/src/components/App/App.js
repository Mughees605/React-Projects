import React from 'react'
import PropTypes from 'prop-types'
import Router from 'react-router/lib/Router'
import Provider from 'react-redux/lib/components/Provider'

const AppContainer = ({history, routes, store}) =>
  <Provider store={store}>
    <Router
      history={history}
      children={routes}
    />
  </Provider>

AppContainer.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}

export default AppContainer
