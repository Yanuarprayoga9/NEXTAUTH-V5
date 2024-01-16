"use server"
import * as z from "zod"
import { LoginSchema } from "@/schemas";


export const login = async(values:z.infer<typeof LoginSchema>) => {
    const validatedfields = LoginSchema.safeParse(values);

    if(!validatedfields) return {error:"invalid fields!"}

    return {success:"Email sent"}

}