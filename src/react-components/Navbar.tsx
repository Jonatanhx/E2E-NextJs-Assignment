import { auth } from "@/auth";
import { HomeIcon, UserCircleIcon } from "lucide-react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

export default async function Navbar() {
  const session = await auth();
  if (session) {
    return (
      <nav className="flex items-center">
        <Link href="/">
          <HomeIcon className="text-white size-11" />
        </Link>
        <Link href="/profile">
          <UserCircleIcon
            className="text-white size-11"
            data-cy="profile-link"
          />
        </Link>
        <AuthButtons />
      </nav>
    );
  } else {
    return <AuthButtons />;
  }
}
