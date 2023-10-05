'use client'
import { GitHubSignButton } from './buttons'

const GITHUB_ENDPOINT = 'https://github.com/login/oauth/authorize?client_id='
const CLIENT_ID = '5b65a4ee4e9e984f6c1a'

export function AuthButton () {
  const handleSignIn = () => {
    window.location.href = GITHUB_ENDPOINT + CLIENT_ID
  }

  return (
    <header>
      <GitHubSignButton onClickFun={handleSignIn}>
        Sign in with Github
      </GitHubSignButton>
      <GitHubSignButton onClickFun={handleSignIn}>
        Sign out
      </GitHubSignButton>
    </header>
  )
}
