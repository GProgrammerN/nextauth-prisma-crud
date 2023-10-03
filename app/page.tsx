'use client'

import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-60">
    <button className="bg-green-400 h-24 w-40 text-lg" onClick={() => signIn('google')}>Logar-se com Google</button>
    </main>
  )
}
