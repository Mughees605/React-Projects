import {injectReducer} from 'redux/reducers'
import url from 'utils/url'

export default (store) => ({
  path: url.leadDetails,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route LeadDetails" */ './modules')
      .then(modules => {
        injectReducer(store, {key: 'LeadDetails', reducer: modules.reducer})

        cb(null, modules.LeadDetailsContainer)
      })
  },
})
