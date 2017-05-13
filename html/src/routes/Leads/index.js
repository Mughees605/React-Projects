import {injectReducer} from 'redux/reducers'
import url from 'utils/url'

export default (store) => ({
  path: url.leads,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route Leads" */ './modules')
      .then(modules => {
        injectReducer(store, {key: 'leads', reducer: modules.reducer})

        cb(null, modules.LeadsContainer)
      })
  },
})
