import { auth } from "@/auth";
import AddNewPostForm from "@/react-components/AddNewPostForm";
import PostFeed from "@/react-components/PostFeed";

export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <main className="flex flex-1 flex-col">
        <AddNewPostForm />
        <PostFeed />
      </main>
    );
  } else {
    return (
      <main className="flex flex-1">
        <PostFeed />
      </main>
    );
  }
}
