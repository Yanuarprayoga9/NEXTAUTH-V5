import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "./data/user";
export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const validatedFIelds = LoginSchema.safeParse(credentials);
        if (validatedFIelds.success) {
          const { email, password } = validatedFIelds.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;
          const matchPassword = await bcrypt.compare(password, user.password);

          if (matchPassword) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
