"use client";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_ISLOGIN_REDIRECT } from "@/routes";
export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_ISLOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center justify-center w-full gap-x-2">
      <Button
        variant={"outline"}
        onClick={() => {
          onClick("google");
        }}
        className="w-full"
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => {
          onClick("github");
        }}
        className="w-full"
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
