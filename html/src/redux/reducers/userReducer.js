import createReducer from 'utils/createReducer'
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/userActions'

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  fetchingUser: true,
  uid: null,
}

export default createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, {uid}) => ({
    fetchingUser: false,
    uid
  }),
  [LOGIN_FAILURE]: () => ({
    fetchingUser: false,
  })
})
