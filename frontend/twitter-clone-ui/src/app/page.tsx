import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import { AuthButtonServer } from './components/server/auth-button-server'
import { GetSession } from '../helpers/users-auth'

export default async function Home () {
  const reqCookies = cookies()
  const session = await GetSession(reqCookies)

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World 👋
      <AuthButtonServer/>
    </main>
  )
}
