import { auth } from "@/auth";
import LogInButton from "./LogInButton";

export default async function AuthButtons() {
  const session = await auth();
  /* 
  if (!session) {
    return <LogInButton />;
  } else {
    return <LogOutButton props={session} />;


  } */
  return <LogInButton />;
}
