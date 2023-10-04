"use client";

import { signIn } from 'next-auth/react'

export default function GoogleAuthButton() {
    return (
        <button className="bg-green-400 h-24 w-40 text-lg" onClick={() => signIn('google')}>Logar-se com Google</button>
    )
}