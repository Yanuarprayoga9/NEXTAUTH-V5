import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center  bg-slate-100  ">
      <div className="space-y-6 py-56 px-32 rounded-lg text-center bg-white">
        <h1 className={cn("text-6xl font-semibold", font.className)}>Auth</h1>
        <p>a simple authentication apps using next auth</p>
        <div className="">
          <LoginButton >
            <Button size={"lg"}>Sign In</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
