import firebase from 'firebase'
import {getLeadsList} from 'models/leadsLists/getLeadsList'
import {leadsLists} from 'models/paths'

export const getLeadsLists = idList =>
  idList
    ? Promise.all(idList.map(id => getLeadsList(id)))
    : firebase.database().ref(leadsLists()).once('value')
