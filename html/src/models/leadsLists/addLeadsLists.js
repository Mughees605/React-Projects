import firebase from 'firebase'
import {leadsLists} from 'models/paths'

export const addLeadsLists = data => firebase.database().ref(leadsLists()).push({data})
