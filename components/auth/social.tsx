"use client";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
export const Social = () => {
  return (
    <div className="flex items-center justify-center w-full gap-x-2">
      <Button variant={"outline"} 
        className="w-full"
        >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button variant={"outline"}
      className="w-full"
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
