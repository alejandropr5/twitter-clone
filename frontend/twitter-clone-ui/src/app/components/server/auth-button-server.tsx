import { AuthButton } from '../client/auth-button-client'
import { GetSession } from './helpers/users-auth'
import { cookies } from 'next/headers'

export async function AuthButtonServer () {
  const reqCookies = cookies()
  const session = await GetSession(reqCookies)

  return <AuthButton session={session}/>
}
