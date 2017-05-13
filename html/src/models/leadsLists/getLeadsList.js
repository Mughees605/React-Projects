import firebase from 'firebase'
import {leadsLists} from 'models/paths'

export const getLeadsList = id => firebase.database().ref(leadsLists(id)).once('value')
