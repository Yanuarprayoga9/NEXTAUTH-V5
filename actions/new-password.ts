import { NewPasswordSchema } from "@/schemas";
import * as z from "zod";
export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  console.log({ values, token });

  if(!token) return {error:"Missing token"}
  return {success:"password successfuly update"}
};
