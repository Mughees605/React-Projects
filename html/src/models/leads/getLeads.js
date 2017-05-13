import firebase from 'firebase'
import {getLead} from 'models/leads/getLead'
import {leads} from 'models/paths'

export const getLeads = idList =>
  idList
    ? Promise.all(idList.map(id => getLead(id)))
    : firebase.database().ref(leads()).once('value')

