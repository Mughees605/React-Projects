import {createLogic} from 'redux-logic'
import {
  GET_PREMIUM_TEMPLATES_ATTEMPT,
  GET_PREMIUM_TEMPLATES_SUCCESS,
  GET_TEMPLATES_ATTEMPT,
  GET_TEMPLATES_SUCCESS,
} from './templatesActions'
import {getTemplates} from 'models/templates/getTemplates'
import {getPremiumTemplates} from 'models/premiumTemplates/getPremiumTemplates'

export const getTemplatesAttempt = createLogic({
  type: GET_TEMPLATES_ATTEMPT,
  latest: true,
  process: async ({dispatch, done}) => {
    const templates = await getTemplates()

    dispatch({
      type: GET_TEMPLATES_SUCCESS,
      templates: templates.val(),
    })
    done()
  },
})

export const getPremiumTemplatesAttempt = createLogic({
  type: GET_PREMIUM_TEMPLATES_ATTEMPT,
  latest: true,
  process: async ({dispatch, done}) => {
    const premiumTemplates = await getPremiumTemplates()

    dispatch({
      type: GET_PREMIUM_TEMPLATES_SUCCESS,
      premiumTemplates: premiumTemplates.val(),
    })
    done()
  },
})

export default [
  getTemplatesAttempt,
  getPremiumTemplatesAttempt,
]
