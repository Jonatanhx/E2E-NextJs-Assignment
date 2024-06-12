import AuthButtons from "./AuthButtons";

export default async function Header() {
  return (
    <header className="py-12 bg-slate-500 border-b-2 border-black">
      <AuthButtons />
      <h1 className="text-3xl font-bold text-white pl-12">Fakebook</h1>
    </header>
  );
}
