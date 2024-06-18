"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LogInButton() {
  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  return (
    <Button variant={"outline"} onClick={handleSignIn} className="m-1">
      Log in
    </Button>
  );
}
