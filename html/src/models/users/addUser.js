import firebase from 'firebase'
import {users} from 'models/paths'

const emptyUserData = {
  first_name: "",
  last_name: "",
  email: "",
  subscription_level: 1,
  leads: {}
}

export const addUser = (uid, data) => firebase.database().ref(users(uid)).set(data || emptyUserData)
