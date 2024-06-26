"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  return (
    <div>
      <div className="flex justify-end">
        <Button variant={"outline"} onClick={() => signOut()}>
          Log out
        </Button>
      </div>
    </div>
  );
}
