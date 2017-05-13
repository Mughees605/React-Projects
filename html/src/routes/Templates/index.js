import url from 'utils/url'

export default (store) => ({
  path: url.templates,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route Templates" */ './modules')
      .then(modules => {
        //injectReducer(store, {key: 'Templates', reducer: modules.reducer})

        cb(null, modules.TemplatesContainer)
      })
  },
})
