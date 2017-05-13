import {injectReducer} from 'redux/reducers'
import url from 'utils/url'

export default (store) => ({
  path: url.individualLeadList,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route IndividualLeadList" */ './modules')
      .then(modules => {
        injectReducer(store, {key: 'IndividualLeadList', reducer: modules.reducer})

        cb(null, modules.IndividualLeadListContainer)
      })
  },
})
