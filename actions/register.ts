"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedfields = RegisterSchema.safeParse(values);
    if(!validatedfields.success) return {error:"something wrong"}
    return {success:"email sent"}
};
