import firebase from 'firebase'
import {premiumTemplates} from 'models/paths'

export const addPremiumTemplate = data => firebase.database().ref(premiumTemplates()).push({data})
