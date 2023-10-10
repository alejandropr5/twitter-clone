import { type ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import fetch from 'node-fetch'
const API_URL = 'http://127.0.0.1:8080'
const SESSION_PATH = '/users/session'

interface SessionData {
  session: boolean
}

export async function GetSession (cookies: ReadonlyRequestCookies) {
  const accessToken = cookies.get('access_token')?.value

  let options = {}
  if (accessToken !== undefined) {
    options = {
      headers: {
        cookie: `access_token=${accessToken}`
      }
    }
  }

  const session = await fetch(API_URL + SESSION_PATH, options)
    .then(async response => await response.json() as SessionData)
    .then(data => data.session)

  return session
}
