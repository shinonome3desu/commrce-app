import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../prisma";

export const nextAuthOption : NextAuthOptions = {
  debug: false,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
 adapter: PrismaAdapter(prisma),
 callbacks: {
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
            ...session.user,
            id: user.id,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

