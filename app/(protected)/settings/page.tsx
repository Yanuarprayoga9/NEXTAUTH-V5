"use client";
import { logout } from "@/actions/logout";
import { currentUser } from "@/lib/auth";

const Settings = () => {
  const user = currentUser();
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
