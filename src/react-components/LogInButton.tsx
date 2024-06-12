"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LogInButton() {
  const handleSignIn = async () => {
    try {
      await signIn("github", {
        callbackUrl: "http://localhost:5173/",
      });
    } catch (error) {
      console.error("Error signing in:", error);
    }
    console.log("test");
  };
  return (
    <Button variant={"outline"} onClick={handleSignIn}>
      Log in
    </Button>
  );
}
