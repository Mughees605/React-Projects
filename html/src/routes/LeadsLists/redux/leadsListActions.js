// ------------------------------------
// Constants
// ------------------------------------
export const GET_LEADS_LIST_ATTEMPT = 'LeadsList.GET_LEADS_LIST_ATTEMPT'
export const GET_LEADS_LIST_SUCCESS = 'LeadsList.GET_LEADS_LIST_SUCCESS'
export const GET_LEADS_LIST_FAILURE = 'LeadsList.GET_LEADS_LIST_FAILURE'
export const UPDATE_LEADS_LIST_ATTEMPT = 'LeadsList.UPDATE_LEADS_LIST_ATTEMPT' 
export const UPDATE_LEADS_LIST_SUCCESS = 'LeadsList.UPDATE_LEADS_LIST_SUCCESS'
export const UPDATE_LEADS_LIST_FAILURE = 'LeadsList.UPDATE_LEADS_LIST_FAILURE'

//-------------------------------------
// Actions
//-------------------------------------

export const getLeadsListsAttempt = () => ({
  type: GET_LEADS_LIST_ATTEMPT,
})

export const getLeadsListsSuccess = (leadsLists) => ({
  type: GET_LEADS_LIST_SUCCESS,
  leadsLists
})

export const getLeadsListsFailure = () => ({
  type: GET_LEADS_LIST_FAILURE,
})

export const updateLeadsListAttempt = (uid,text)=>
({
  type: UPDATE_LEADS_LIST_ATTEMPT,
  uid,
  text
})
export const updateLeadsListSuccess = ()=>({
  type:UPDATE_LEADS_LIST_SUCCESS,
})
export const updateLeadsListFailure = ()=>({
type:UPDATE_LEADS_LIST_FAILURE
})