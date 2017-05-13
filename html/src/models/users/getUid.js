import firebase from 'firebase'

export const getUid = () => {
  const {currentUser} = firebase.auth()
  return currentUser ? currentUser.uid : null
}
