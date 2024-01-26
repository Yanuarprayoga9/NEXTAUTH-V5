"use client"
import React from "react";
import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/hooks/use-current-role";
interface alowedRoleProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}
const AllowedRole = ({ children, allowedRole }: alowedRoleProps) => {
  const role = useCurrentRole();
  if(role !== allowedRole) return <div>You do not have permission to view this content!</div>;
  return <div>
    {children}
  </div>;
};

export default AllowedRole;
