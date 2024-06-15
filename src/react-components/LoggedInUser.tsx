import { auth } from "@/auth";
import Image from "next/image";
import db from "../../prisma/db";

export default async function LoggedInUser() {
  const session = await auth();

  const loggedInUser = await db.user.findUnique({
    where: {
      email: session!.user!.email!,
    },
  });

  return (
    <div className="flex flex-row items-center">
      <p className="text-white text-xl pr-5">Welcome {session!.user?.name}</p>
      <Image
        src={loggedInUser?.profilePicture!}
        alt="Github profile picture"
        width={100}
        height={100}
      ></Image>
    </div>
  );
}
