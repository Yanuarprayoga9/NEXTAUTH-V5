import { LogoutButton } from "@/components/auth/logout-button";
import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center bg-slate-100  ">
      <Navbar />
      {children}
      <LogoutButton variant="default">Sign Out</LogoutButton>
    </div>
  );
};

export default ProtectedLayout;
