import createReducer from 'utils/createReducer'
import {GET_PREMIUM_TEMPLATES_SUCCESS, GET_TEMPLATES_SUCCESS} from './templatesActions'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  templates: null,
  premiumTemplates: null,
}

export default createReducer(initialState, {
  [GET_TEMPLATES_SUCCESS]: (state, {templates}) => ({
    templates,
  }),

  [GET_PREMIUM_TEMPLATES_SUCCESS]: (state, {premiumTemplates}) => ({
    premiumTemplates,
  }),
})
