import {createLogic} from 'redux-logic'
import {
  GET_LEADS_LIST_ATTEMPT,
  getLeadsListsSuccess,
  getLeadsListsFailure,

  UPDATE_LEADS_LIST_ATTEMPT,
  updateLeadsListSuccess,
  updateLeadsListFailure
} from './leadsListActions'

import {getLeadsLists} from 'models/leadsLists/getLeadsLists'
import {updateLeadsList} from 'models/leadsLists/updateLeadsList'

const debug = require('debug')('app:leadsListLogic')

export const getLeadsListAttempt = createLogic({
  type: GET_LEADS_LIST_ATTEMPT,
  latest: true,
  process: async ({getState, action},dispatch, done) => {
    try {
      const leadsListsSnapshot = await getLeadsLists()
      const leadsLists = leadsListsSnapshot && Object.entries(leadsListsSnapshot.val()).map(([key, value]) => ({key:key, value:value}))

      dispatch(getLeadsListsSuccess(leadsLists))
    } 
    catch (err){
      dispatch(getLeadsListsFailure())
      debug(err)
    }
  

    done()
  },
})
export const updateLeadListAttemp = createLogic({
  type: UPDATE_LEADS_LIST_ATTEMPT,
  latest: true,
  process: async ({getState, action},dispatch, done) => {
    try {
      const updatedLeadList = await updateLeadsList(action.uid,action.text)
      dispatch(updateLeadsListSuccess());
    } 
    catch (err){
      dispatch(updateLeadsListFailure());
      debug(err)
    }  
    done()
  },
})

export default [
  getLeadsListAttempt,
  updateLeadListAttemp
]
