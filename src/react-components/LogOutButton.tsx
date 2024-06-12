"use client";

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
      <button onClick={() => signOut()}>Sign out</button>;
    </div>
  );
}
