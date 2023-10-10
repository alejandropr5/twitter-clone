'use client'

import { useRouter } from 'next/navigation'
import { GitHubSignButton } from './buttons'

const API_URL = 'http://127.0.0.1:8080'
const GITHUB_AUTH_PATH = '/github/authorize'

const LOGOUT_PATH = '/users/logout'
export function AuthButton ({ session }: { session: boolean | false }) {
  const router = useRouter()

  const handleSignIn = async () => {
    window.location.assign(API_URL + GITHUB_AUTH_PATH)
  }

  const handleSignOut = async () => {
    await fetch(API_URL + LOGOUT_PATH, { credentials: 'include' })
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
