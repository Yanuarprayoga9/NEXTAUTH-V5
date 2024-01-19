import NextAuth, { Session } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";

import { JWT } from "next-auth/jwt";
import { getUserById } from "./data/user";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user }) {
      if (user) {
        const existiUser = await getUserById(user.id as string);
        /*
         * if user is undefined / null
         * and emailVerified null return false
         */
        if (!existiUser || !existiUser?.emailVerified) {
          return false;
        }
        console.log({ existiUser });
        return true;
      }
      return false;
    },
    async session({ session, token }) {
      const user = await db.user.findUnique({ where: { id: token.sub } });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (session.user && user) {
        session.user.role = user?.role;
      }

      return session;
    },
    async jwt({ token }) {
      console.log("token", token);
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
