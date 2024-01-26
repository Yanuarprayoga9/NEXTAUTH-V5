"use client";

import { logout } from "@/actions/logout";
import { Button } from "../ui/button";

interface LogoutButtonProps {
  children?: React.ReactNode;
  variant?: "default" | "outline";
};

export const LogoutButton = ({
  children,variant
}: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <Button onClick={onClick} variant={variant} className="cursor-pointer">
      {children}
    </Button>
  );
};