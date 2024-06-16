import { auth } from "@/auth";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

export default async function AuthButtons() {
  const session = await auth();

  if (!session) {
    return <LogInButton />;
  } else {
    return <LogOutButton />;
  }
}
