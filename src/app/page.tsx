import { auth } from "@/auth";
import AddNewPostForm from "@/react-components/AddNewPostForm";
import PostFeed from "@/react-components/PostFeed";

export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <main>
        <AddNewPostForm />
        <PostFeed />
        <p>{session.user?.email}</p>
      </main>
    );
  } else {
    return (
      <main>
        <PostFeed />
      </main>
    );
  }
}
