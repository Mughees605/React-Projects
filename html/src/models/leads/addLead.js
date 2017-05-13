import firebase from 'firebase'
import {leads} from 'models/paths'

export const addLead = data => firebase.database().ref(leads()).push({data})
