"use client";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const Settings = () => {
  const user = useCurrentUser();
  return (
    <div>
      {JSON.stringify(user)}
      <form action={logout}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default Settings;
