import React from 'react'
import ReactDOM from 'react-dom'
import browserHistory from 'react-router/lib/browserHistory'
import syncHistoryWithStore from 'react-router-redux/lib/sync'
import createStore from './redux/store'
import AppContainer from './components/App'

// ========================================================
// Store and History Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
export const store = createStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer
      store={store}
      history={history}
      routes={routes}
    />,
    MOUNT_NODE
  )
}

// ========================================================
// Developer Tools Setup
// ========================================================
// if (__DEV__) {
//   if (window.__REDUX_DEVTOOLS_EXTENSION__) {
//     window.__REDUX_DEVTOOLS_EXTENSION__.open()
//   }
// }

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error}/>, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () => {
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    })
  }
}

// ========================================================
// Go!
// ========================================================
render()
