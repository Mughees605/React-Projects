import { createLogic } from 'redux-logic'

import {
	STARTUP
} from 'redux/actions/commonActions'

const debug = require('debug')('app:commonLogic')

export const startup = createLogic({
	type: STARTUP,
	latest: true, // take latest only

	process ({}, dispatch, done) {
    debug('StartupLogic')
		done()
	}
})

export default [
	startup
]
