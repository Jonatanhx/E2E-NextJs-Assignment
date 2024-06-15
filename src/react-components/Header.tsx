import { auth } from "@/auth";
import AuthButtons from "./AuthButtons";
import LoggedInUser from "./LoggedInUser";

export default async function Header() {
  const session = await auth();

  if (session) {
    return (
      <header className="flex py-6 bg-slate-500 border-b-2 border-black justify-between">
        <h1 className="text-4xl font-bold text-white pl-12 flex items-center">
          Fakebook
        </h1>
        <AuthButtons />
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
        <AuthButtons />
      </header>
    );
  }
}
