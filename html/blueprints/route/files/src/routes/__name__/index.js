import {injectReducer} from 'store/reducers'
import url from 'utils/url'

export default (store) => ({
  path: url.<%= camelEntityName %>,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route <%= pascalEntityName %>" */ './modules')
      .then(modules => {
        injectReducer(store, { key: '<%= pascalEntityName %>', reducer: modules.reducer })

        cb(null, modules.<%= pascalEntityName %>Container)
      })
  },
})
