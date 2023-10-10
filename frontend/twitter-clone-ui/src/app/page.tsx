import { AuthButtonServer } from './components/server/auth-button-server'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World 👋
      <AuthButtonServer/>
    </main>
  )
}
