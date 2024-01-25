"use client";
import React from "react";
import * as z from "zod";
import { CardWrapper } from "./card-wrapper";
import { NewPasswordSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { newPassword } from "@/actions/new-password";
import { useSearchParams } from "next/navigation";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

const NewPassword = () => {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(values, token)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
            // form.reset();
          }
          if (data?.success) {
            setSuccess(data.success);
            // form.reset();
          }
        })
        .catch((error) => {
          // ... handle errors here
          setError("Something Wrong");
        });
    });
  };
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Dont have an account?"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="bg-white"
                    {...field}
                    placeholder="********"
                  />
                </FormControl>
                <Button disabled={isPending} className="w-full" type="submit">
                  update password
                </Button>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormError message={error} />
          <FormSuccess message={success} />
        </form>
      </Form>
    </CardWrapper>
  );
};

export default NewPassword;
