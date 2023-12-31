import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handler = NextAuth({
   // adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? 'default',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? 'default'
        })
    ]

})

export { handler as GET, handler as POST }