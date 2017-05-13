import createReducer from 'utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const <%= pascalEntityName.toUpperCase() %>_FETCH = '<%= pascalEntityName.toUpperCase() %>_FETCH'

// ------------------------------------
// Actions
// ------------------------------------

export const <%= pascalEntityName.toLowerCase() %>Fetch = (params) => (dispatch, getStore) => {
  dispatch({
    type: <%= pascalEntityName.toUpperCase() %>_FETCH,
    params
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false
}

export default createReducer(initialState, {
  [<%= pascalEntityName.toUpperCase() %>_FETCH]: (state, action) => ({
    fetching: false
  })
})
