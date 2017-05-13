import createReducer from 'utils/createReducer'
import {
  GET_LEADS_LIST_ATTEMPT,
  GET_LEADS_LIST_SUCCESS,
  GET_LEADS_LIST_FAILURE,
} from './leadsListActions'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  leadsLists: null,
  fetchingLeadsLists: false
}

export default createReducer(initialState, {
  [GET_LEADS_LIST_ATTEMPT]: (state, {uid}) => ({
    fetchingLeadsLists: true
  }),
  [GET_LEADS_LIST_SUCCESS]: (state, {leadsLists}) => ({
    leadsLists,
    fetchingLeadsLists: false
  }),
  [GET_LEADS_LIST_FAILURE]: () => ({
    fetchingLeadsLists: false
  }), 
})
