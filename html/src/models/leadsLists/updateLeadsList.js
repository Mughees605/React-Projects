import firebase from 'firebase'
import {leadsLists} from 'models/paths'

export const updateLeadsList = (uid,text) => firebase.database().ref(leadsLists(uid)).update({name:text});
