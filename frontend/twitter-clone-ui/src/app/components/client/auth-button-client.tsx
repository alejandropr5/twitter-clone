'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GitHubSignButton } from './buttons'

const API_URL = 'http://127.0.0.1:8080'
const GITHUB_AUTH_PATH = '/github/authorize'
const SESSION_PATH = '/users/session'
const LOGOUT_PATH = '/users/logout'
// { session }: { session: boolean | false }
export function AuthButton () {
  const [session, setSession] = useState<boolean>(false)
  const router = useRouter()

  fetch(API_URL + SESSION_PATH, {
    credentials: 'include'
  })
    .then(async response => await response.json())
    .then(data => { setSession(data.session) })

  const handleSignIn = () => {
    window.location.assign(API_URL + GITHUB_AUTH_PATH)
  }

  const handleSignOut = () => {
    fetch(API_URL + LOGOUT_PATH, { credentials: 'include' })
    router.refresh()
  }

  return (
    <header>
      {
        session
          ? (
            <GitHubSignButton onClick={handleSignOut}>
              Sign out
            </GitHubSignButton>
            )
          : (
            <GitHubSignButton onClick={handleSignIn}>
              Sign in with GitHub
            </GitHubSignButton>
            )
      }
    </header>
  )
}
