import firebase from 'firebase'
import {leads} from 'models/paths'

export const getLead = id => firebase.database().ref(leads(id)).once('value')
