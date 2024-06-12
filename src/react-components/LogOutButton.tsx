"use client";

import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

interface LogOutButtonProps {
  props: Session;
}

export default function LogOutButton(props: LogOutButtonProps) {
  const session = props;
  return (
    <div>
      <p>Signed in as {session.props.user?.name}</p>
      <Button variant={"outline"} onClick={() => signOut()}>
        Sign out
      </Button>
      ;
    </div>
  );
}
