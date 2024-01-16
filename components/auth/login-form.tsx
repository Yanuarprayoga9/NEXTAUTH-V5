import React from "react";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./card-wrapper";
import {
  Form,FormControl,FormField,FormItem,FormLabel,FormMessage
} from '@/components/ui/form'
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";


export const LoginForm = () => {
const form = useForm<z.infer<typeof LoginSchema>>({
  resolver:zodResolver(LoginSchema),
  defaultValues:{
    email:"",
    password:""
  }
})
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Dont have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      login form
    </CardWrapper>
  );
};
