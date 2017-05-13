// @flow

import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import {reducer as form} from 'redux-form'

import user from './userReducer'
import common from './commonReducer'

import templates from 'routes/Templates/redux/templatesReducer'
import {reducer as modal} from 'redux-modal'
import leadsLists from 'routes/LeadsLists/redux/leadsListReducer'

export const makeRootReducer = (asyncReducers) =>
  combineReducers({
    user,
    common,
    templates,
    routing,
    form,
    modal,
    leadsLists,
    ...asyncReducers,
  })

export const injectReducer = (store, {key, reducer}) => {
  if (!store.asyncReducers[key]) {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
  }
}

export default makeRootReducer
