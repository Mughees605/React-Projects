import { createLogic } from 'redux-logic'
import { getTruthyOnly, parseSnapshotArray } from 'utils/firebaseHelpers'
import {getUser} from 'models/users/getUser'
import {getLeads} from 'models/leads/getLeads'

import {
  LEADS_FETCH_ATTEMPT,
  fetchLeadsSuccess,
  fetchLeadsFailure
} from 'routes/Leads/modules/Leads.js'

const debug = require('debug')('app:leadsLogic')

export const fetchLeads = createLogic({
  type: LEADS_FETCH_ATTEMPT,
  latest: true, // take latest only
  
  async process ({}, dispatch, done) {
    try {
      const userSnapshot = await getUser()
      const activeLeads = getTruthyOnly(userSnapshot.val().leads)
      const leadsListSnapshot = await getLeads(activeLeads)
      const userLeads = parseSnapshotArray(leadsListSnapshot, true)
  
      dispatch(fetchLeadsSuccess(userLeads))
    } catch (err) {
      dispatch(fetchLeadsFailure())
      debug(err)
    }
    done()
  }
})

export default [
  fetchLeads
]
