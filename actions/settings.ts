"use server";
import * as z from "zod";

import { SettingSchema } from "@/schemas";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const setting = async (values: z.infer<typeof SettingSchema>) => {
  const user = await currentUser();
  if (user) {
    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: values.name,
      },
    });
  }
};
