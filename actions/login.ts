"use server"
import * as z from "zod"
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import {DEFAULT_ISLOGIN_REDIRECT} from "@/routes"

export const login = async(values:z.infer<typeof LoginSchema>) => {
    const validatedfields = LoginSchema.safeParse(values);

    if(!validatedfields.success) return {error:"invalid fields!"}
    const {email,password} = validatedfields.data
    try {
        await signIn("credentials",{
            email,
            password,
            redirectTo:DEFAULT_ISLOGIN_REDIRECT
        })
    } catch (error) {

        
    }
}

