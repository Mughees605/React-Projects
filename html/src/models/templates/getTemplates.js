import firebase from 'firebase'
import {getTemplate} from 'models/templates/getTemplate'
import {templates} from 'models/paths'

export const getTemplates = idList =>
  idList
    ? Promise.all(idList.map(id => getTemplate(id)))
    : firebase.database().ref(templates()).once('value')
