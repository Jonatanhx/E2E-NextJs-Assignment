import { auth } from "@/auth";
import Link from "next/link";
import LoggedInUser from "./LoggedInUser";
import Navbar from "./Navbar";

export default async function Header() {
  const session = await auth();

  if (session) {
    return (
      <header className="flex py-6 bg-slate-500 border-b-2 border-black justify-between">
        <Link href="/" className=" flex items-center">
          <h1 className="text-4xl font-bold text-white pl-12">Fakebook</h1>
        </Link>
        <Navbar />
        <div>
          <LoggedInUser />
        </div>
      </header>
    );
  }

  if (!session) {
    return (
      <header className="flex py-6 bg-slate-500 border-b-2 border-black justify-between">
        <h1 className="text-4xl font-bold text-white pl-12 flex items-center">
          Fakebook
        </h1>
        <Navbar />
      </header>
    );
  }
}
