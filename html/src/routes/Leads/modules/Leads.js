import createReducer from 'utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------
export const LEADS_FETCH_ATTEMPT = 'Leads.LEADS_FETCH_ATTEMPT'
export const LEADS_FETCH_SUCCESS = 'Leads.LEADS_FETCH_SUCCESS'
export const LEADS_FETCH_FAILURE = 'Leads.LEADS_FETCH_FAILURE'


//-------------------------------------
// Actions
//-------------------------------------

export const fetchLeads = () => ({
  type: LEADS_FETCH_ATTEMPT
})

export const fetchLeadsSuccess = leads => ({
  type: LEADS_FETCH_SUCCESS,
  leads
})

export const fetchLeadsFailure = () => ({
  type: LEADS_FETCH_FAILURE
})

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  fetchingLeads: false,
  leads: {}
}

export default createReducer(initialState, {
  [LEADS_FETCH_ATTEMPT]: (state, {uid}) => ({
    fetchingLeads: true
  }),
  [LEADS_FETCH_SUCCESS]: (state, {leads}) => ({
    fetchingLeads: false,
    leads
  }),
  [LEADS_FETCH_FAILURE]: () => ({
    fetchingLeads: false
  })
})

