/// @flow

import commonLogic from './commonLogic'
import userLogic from './userLogic'
import leadsListsLogic from 'routes/LeadsLists/redux/leadsListLogic'
import leadsLogic from 'routes/Leads/modules/LeadsLogic'
import templatesLogic from 'routes/Templates/redux/templatesLogic'

export default [
	...commonLogic,
  ...userLogic,
  ...leadsListsLogic,
  ...templatesLogic,
  ...leadsLogic
]
