import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailVerifictionToken = async (
  email: string,
  token: string
) => {
  const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;
  console.log({ confirmLink, email });
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};

export const sendEmailResetPasswordToken = async (
  email: string,
  token: string
) => {
  const resetLink = `${process.env.BASE_URL}/auth/new-password?token=${token}`;
  console.log({ resetLink, email });
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "reset password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
};
