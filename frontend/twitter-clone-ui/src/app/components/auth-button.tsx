'use client'

// import { useEffect } from 'react'
import { GitHubSignButton } from './buttons'

// const GITHUB_LOGIN_ENDPOINT = 'http://127.0.0.1:8080'

const API_URL = 'http://127.0.0.1:8080'
const GITHUB_AUTH_PATH = '/users/github_auth'

export function AuthButton () {
  const handleSignIn = () => {
    // const CURRENT_URL = encodeURIComponent(window.location.href)
    const AUTH_URL = API_URL + GITHUB_AUTH_PATH
    // console.log(AUTH_URL)
    window.location.assign(AUTH_URL)
    // fetch(AUTH_URL)
    //   .then()
  }

  // useEffect(() => {
  //   const GetSession = async () => {
  //     await fetch(API_ENDPOINT + USER_INFO_ROUTE, { headers: { hi: 'world' } })
  //       .then(async (res) => { return await res.json() })
  //       .then(async (data) => { console.log(data) })
  //   }

  //   GetSession()
  // }, [])

  return (
    <header>
      <GitHubSignButton onClick={handleSignIn}>
        Sign in with Github
      </GitHubSignButton>
      <GitHubSignButton onClick={handleSignIn}>
        Sign out
      </GitHubSignButton>
    </header>
  )
}
