import { logout } from "@/actions/logout";
import React from "react";
interface LogoutButtonProps {
  children?: React.ReactNode;
}
const LogoutButton = ({ children }: LogoutButtonProps) => {
  onclick = () => {
    logout();
  };
  return <div>{children}</div>;
};

export default LogoutButton;
