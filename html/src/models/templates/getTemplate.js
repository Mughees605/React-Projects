import firebase from 'firebase'
import {templates} from 'models/paths'

export const getTemplate = id => firebase.database().ref(templates(id)).once('value')
