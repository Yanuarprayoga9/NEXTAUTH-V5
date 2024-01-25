import { auth, signOut } from "@/auth"
import { currentRole } from "@/lib/auth"

const page = async () => {
    const session = await auth()
    const role = await currentRole()
    console.log(role)
  return (
    <div>
      {JSON.stringify(session)}
      <form action={
        async ()=>{
          "use server"
          await signOut();
        }
      }>
        <button type="submit">
          Sign Out
        </button>
      </form>
    </div>
  )
}

export default page