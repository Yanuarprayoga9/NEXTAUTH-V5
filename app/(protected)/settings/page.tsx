import { logout } from "@/actions/logout";
import { auth, signOut } from "@/auth";
import { currentRole } from "@/lib/auth";

const page = async () => {
  const session = await auth();
  const role = await currentRole();
  console.log(role);
  return (
    <div>
      {JSON.stringify(session)}
      <form action={logout}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default page;
