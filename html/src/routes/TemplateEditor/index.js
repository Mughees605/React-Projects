import {injectReducer} from 'redux/reducers'
import url from 'utils/url'

export default (store) => ({
  path: url.templateEditor,
  getComponent(nextState, cb) {
    import(/* webpackChunkName: "Route TemplateEditor" */ './modules')
      .then(modules => {
        injectReducer(store, {key: 'TemplateEditor', reducer: modules.reducer})

        cb(null, modules.TemplateEditorContainer)
      })
  },
})
