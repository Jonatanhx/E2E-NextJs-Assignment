"use client";

import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface LogOutButtonProps {
  props: Session;
}

export default function LogOutButton(props: LogOutButtonProps) {
  const session = props;
  return (
    <div>
      <div className="flex flex-row items-center">
        <p className="text-white text-xl pr-5">
          Welcome {session.props.user?.name}
        </p>
        <Image
          src={session.props.user?.image!}
          alt="Github profile picture"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="flex justify-end">
        <Button variant={"outline"} onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
