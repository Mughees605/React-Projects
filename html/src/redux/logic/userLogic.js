import {createLogic} from 'redux-logic'
import Cookies from 'js-cookie'
import {push} from 'react-router-redux/lib/actions'
import url from 'utils/url'
import {getUser} from 'models/users/getUser'
import {addUser} from 'models/users/addUser'

import {
  LOGIN_ATTEMPT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from 'redux/actions/userActions'

const debug = require('debug')('app:userLogic')

export const loginAttempt = createLogic({
  type: LOGIN_ATTEMPT,
  latest: true, // take latest only

  async process ({httpClient, fb, action: {/*some data from actions will be here*/}}, dispatch, done) {
    debug('userLogic start')
    const token = Cookies.get('mm_cookie_user_id')

    try {
      if (token) {
        const {firebaseJWT} = await httpClient('login', {
          body: {
            token
          },
          method: 'POST'
        }, token)

        const {uid} = await fb.auth().signInWithCustomToken(firebaseJWT)

        let user = await getUser(uid)

        if (!user.val()) {
          user = await addUser(uid)
        }

        dispatch({
          type: LOGIN_SUCCESS,
          uid,
          ...user.val(),
        })

      } else {
        debug('No token provided')
        dispatch({type: LOGIN_FAILURE})
        dispatch(push(url.login))
      }
    } catch (err) {
      debug(err)
      dispatch({type: LOGIN_FAILURE})
    }

    done()
  }
})

export default [
  loginAttempt
]
