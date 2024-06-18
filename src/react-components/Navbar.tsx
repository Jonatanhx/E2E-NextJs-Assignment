import { UserCircleIcon } from "lucide-react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  return (
    <nav className="flex items-center">
      <Link href="/profile">
        <UserCircleIcon className="text-white size-11" data-cy="profile-link" />
      </Link>
      <AuthButtons />
    </nav>
  );
}
