import firebase from 'firebase'
import {templates} from 'models/paths'

export const addTemplate = data => firebase.database().ref(templates()).push({data})
