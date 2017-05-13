import {getUid} from 'models/users/getUid'

export const users = uid =>
  uid
    ? `/users/${uid}`
    : `/users/${getUid()}`

export const leads = (leadId) =>
  leadId ?
    `/leads/${leadId}` :
    '/leads/'

export const leadsLists = (leadListId, uid = getUid()) =>
  leadListId ?
    `/leads_lists/${uid}/${leadListId}` :
     `/leads_lists/${uid}`

export const salesSteps = (leadId, uid = getUid()) =>
  leadId
    ? `/salesSteps/${uid}/${leadId}`
    : `/salesSteps/${uid}`

export const templates = (templateId, uid = getUid()) =>
  templateId
    ? `/templates/${uid}/${templateId}`
    : `/templates/${uid}`
export const premiumTemplates = premiumTemplateId =>
  premiumTemplateId
    ? `/premiumTemplates/${premiumTemplateId}`
    : '/premiumTemplates'
