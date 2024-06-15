import { auth } from "@/auth";
import Image from "next/image";
import db from "../../prisma/db";
export default async function LoggedInUser() {
  let session = null;
  let loggedInUser = null;

  try {
    session = await auth();

    if (!session || !session.user || !session.user.email) {
      throw new Error("Session data incomplete");
    }

    loggedInUser = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
  } catch (error) {
    console.error("Error fetching user or session data:", error);
  }
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
