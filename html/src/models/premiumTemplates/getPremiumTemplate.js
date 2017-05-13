import firebase from 'firebase'
import {premiumTemplates} from 'models/paths'

export const getPremiumTemplate = id => firebase.database().ref(premiumTemplates(id)).once('value')
