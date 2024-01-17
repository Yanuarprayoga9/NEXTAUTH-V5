import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "./lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token,session }) {
      // Send properties to the client, like an access_token from a provider.
      console.log({
        sessionToken: token,
        session,
      });
      return session;
    },
    async jwt({ token }) {
      return token;
    },
    async redirect({ url, baseUrl }) {
      console.log({ url });
      console.log({ baseUrl });
      return baseUrl;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
