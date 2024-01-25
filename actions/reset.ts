"use server";

// cari email yang disubmit
import * as z from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateResetPasswordToken } from "@/lib/tokens";
import { sendEmailResetPasswordToken } from "@/lib/mail";

export const resetPasswordByEmail = async (
  values: z.infer<typeof ResetSchema>
) => {
  const validateFields = ResetSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "invalid email" };
  }
  const { email } = validateFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) return { error: "email not found" };

  const resetPass = await generateResetPasswordToken(email);
  await sendEmailResetPasswordToken(resetPass.email, resetPass.token);

  return { success: "reset password email sent" };
};
