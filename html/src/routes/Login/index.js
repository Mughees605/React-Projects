import {injectReducer} from 'redux/reducers'
import url from 'utils/url'

export default (store) => ({
  path: url.login,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route Login" */ './modules')
      .then(modules => {
        injectReducer(store, {key: 'Login', reducer: modules.reducer})

        cb(null, modules.LoginContainer)
      })
  },
})
