"use server";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import * as z from "zod";
export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();
  const dbUser = await getUserById(user?.id as string)
  console.log({user})
  console.log({dbUser})
  await db.user.update({
    where: {
      id: user?.id,
    },
    data: {
       ...values
    },
  });
};
