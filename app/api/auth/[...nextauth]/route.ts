import { nextAuthOption } from "@/app/lib/next-auth/option"
import NextAuth from "next-auth"

const handler = NextAuth(nextAuthOption);

export { handler as GET, handler as POST }