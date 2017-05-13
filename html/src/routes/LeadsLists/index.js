import {injectReducer} from 'redux/reducers'
import url from 'utils/url'

export default (store) => ({
  path: url.leadsLists,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route LeadsLists" */ './modules')
      .then(modules => {
        injectReducer(store, {key: 'LeadsLists', reducer: modules.reducer})

        cb(null, modules.LeadsListsContainer)
      })
  },
})
