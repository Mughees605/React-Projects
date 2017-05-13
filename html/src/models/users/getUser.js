import firebase from 'firebase'
import {users} from 'models/paths'

export const getUser = uid => firebase.database().ref(users(uid)).once('value')
