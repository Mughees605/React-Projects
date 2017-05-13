// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
import rootReducer from '../reducers'
import logic from '../logic'
import * as firebase from 'firebase'
import config from 'config'
import api from 'utils/api'

firebase.initializeApp(config.firebase)

// injected dependencies for logic
const deps = {
  httpClient: api,
  fb: firebase
}

const configureStore = (preloadedState,  history = browserHistory) => {
  const logicMiddleware = createLogicMiddleware(logic, deps)

  const middleware = applyMiddleware(
    logicMiddleware,
		routerMiddleware(history)
  )

	const store = createStore(
		rootReducer(),
		preloadedState,
		compose(
			middleware,
			__DEV__ && window.devToolsExtension ? window.devToolsExtension() : f => f
		))

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducers = require('../reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }
  return store
}

export default configureStore
