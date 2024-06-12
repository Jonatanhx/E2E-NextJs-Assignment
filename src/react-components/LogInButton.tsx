"use client";

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
  };
  return (
    <div>
      <button onClick={() => handleSignIn} className="z-40">
        Sign in
      </button>
    </div>
  );
}
