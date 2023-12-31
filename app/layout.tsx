import { getServerSession } from 'next-auth'
import SessionProvider from './components/SessionProvider'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteMaker',
  description: 'A NextAuth Prisma CRUD.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <main className='mx-auto max-w-5xl text-2xl flex gap-2'>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
