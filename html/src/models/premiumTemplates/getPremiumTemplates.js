import firebase from 'firebase'
import {getPremiumTemplate} from 'models/premiumTemplates/getPremiumTemplate'
import {premiumTemplates} from 'models/paths'

export const getPremiumTemplates = idList =>
  idList
    ? Promise.all(idList.map(id => getPremiumTemplate(id)))
    : firebase.database().ref(premiumTemplates()).once('value')
