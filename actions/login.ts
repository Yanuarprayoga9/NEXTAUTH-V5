"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_ISLOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendEmailVerifictionToken } from "@/lib/mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedfields = LoginSchema.safeParse(values);

  if (!validatedfields.success) return { error: "invalid fields!" };
  const { email, password } = validatedfields.data;

  /*
   * check if user not login using credential
   * return error invalid credential
   */
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "invalid credentials" };
  }

  /*
   * check if user not have email verified
   * genrate verification token
   */

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendEmailVerifictionToken(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_ISLOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something Wrong" };
      }
    }
    throw error;
  }
};
