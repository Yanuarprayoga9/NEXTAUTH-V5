import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"

const font = Poppins({
  subsets:['latin'],
  weight:['600']
})
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="space-y-6 bg-slate-100 p-20 rounded-lg">
        <h1 className={cn("text-6xl font-semibold",font.className)}>Auth</h1>
        <p>a simple authentication apps using next auth</p>
        <div className="">
          <Button size={"lg"}>Sign In</Button>
        </div>
      </div>
    </main>
  );
}
