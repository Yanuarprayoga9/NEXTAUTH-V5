"use client"
import { setting } from "@/actions/settings"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"
import * as z from "zod"
const Settings = () => {
const [isPending,setTransition] = useTransition()

  const onclick =()=>{
  setTransition( ()=>{
    setting({name:"test"})
  }
  )
 }
  return (
    <div>
      <h1>Settings</h1>
      <Button variant="default"disabled={isPending} onClick={onclick}>test</Button>
    </div>
  )
}

export default Settings