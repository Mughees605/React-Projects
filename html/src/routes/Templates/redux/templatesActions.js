// ------------------------------------
// Constants
// ------------------------------------
export const GET_TEMPLATES_ATTEMPT = 'Templates.GET_TEMPLATES_ATTEMPT'
export const GET_TEMPLATES_SUCCESS = 'Templates.GET_TEMPLATES_SUCCESS'

export const GET_PREMIUM_TEMPLATES_ATTEMPT = 'Templates.GET_PREMIUM_TEMPLATES_ATTEMPT'
export const GET_PREMIUM_TEMPLATES_SUCCESS = 'Templates.GET_PREMIUM_TEMPLATES_SUCCESS'

//-------------------------------------
// Actions
//-------------------------------------

export const getTemplatesAttempt = () => ({
  type: GET_TEMPLATES_ATTEMPT,
})

export const getPremiumTemplatesAttempt = () => ({
  type: GET_PREMIUM_TEMPLATES_ATTEMPT,
})
