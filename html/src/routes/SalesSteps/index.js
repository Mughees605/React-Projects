import {injectReducer} from 'redux/reducers'
import url from 'utils/url'

export default (store) => ({
  path: url.salesSteps,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route SalesSteps" */ './modules')
      .then(modules => {
        injectReducer(store, {key: 'SalesSteps', reducer: modules.reducer})

        cb(null, modules.SalesStepsContainer)
      })
  },
})
