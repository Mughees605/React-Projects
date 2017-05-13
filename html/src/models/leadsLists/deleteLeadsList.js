import firebase from 'firebase'
import {leadsLists} from 'models/paths'

export const deleteLeadsList = (uid) => firebase.database().ref(leadsLists(uid)).remove();
