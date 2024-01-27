"use client";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSession } from "next-auth/react";

const Settings = () => {
  const [isPending, setTransition] = useTransition();
  const { update } = useSession();
  const onCLick = () => {
    setTransition(() => {
      settings({ name: "testing", role: "ADMIN" }).then(() => {
        update();
      });
    });
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
      </CardHeader>
      <CardContent>
        <Button onClick={onCLick} disabled={isPending}>
          Update name
        </Button>
      </CardContent>
    </Card>
  );
};

export default Settings;
