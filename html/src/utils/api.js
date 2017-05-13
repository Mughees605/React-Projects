import isEmpty from 'ramda/src/isEmpty'
import config from 'config'

const debug = require('debug')('app:api')
// do NOT send Authorization header to urls
const allowedRequests = [
  {
    url: 'auth/token'
  },
  {
    url: 'users/user',
    method: 'post'
  }
]

const isAuthRequest = (url, method) =>
  allowedRequests.find(
    rq =>
      rq.method && rq.method !== method ?
        false :
        rq.url === url
  )

const prepareRequestBody = (body, jsonRequest) => {
  if (jsonRequest) {
    return JSON.stringify(body)
  } else {
    let formDataBody = new FormData()
    Object.keys(body).forEach((key) => {
      formDataBody.append(key, body[key])
    })

    return formDataBody
  }
}

const prepareRequestHeaders = ({headers = {}, method}, jsonRequest, url, token) => {
  if (token && !isEmpty(token) && !isAuthRequest(url, method)) {
    debug(token)
    headers['Authorization'] = `Bearer ${token}`
  }

  if (jsonRequest) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  }

  return headers
}

const prepareURL = ( targetUrl, query ) => {
  if ( !query ) {
    return targetUrl
  }

  let queryUrl = ''

  if ( Array.isArray(query) ) {
    query.forEach( q => {
      const key = Object.keys(q)[0]
      queryUrl = `${queryUrl}${key}=${q[key]}&`
    })
  } else {
    for (let key in query) {
      if (query.hasOwnProperty(key)) {
        queryUrl = `${queryUrl}${key}=${query[key]}&`
      }
    }
  }

  return `${targetUrl}?` + queryUrl
}

export default async (url, data, token, jsonRequest = true) => {
  data.body = prepareRequestBody(data.body, jsonRequest)
  data.headers = prepareRequestHeaders(data, jsonRequest, url, token)
  const URL = prepareURL(config.api.baseUrl + url, data.query)
  const response = await fetch(URL, data)

  const responseBody = await response.json()

  if (!response.ok) {
    throw responseBody
  }

  return responseBody
}
