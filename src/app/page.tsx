import { auth } from "@/auth";
import AddNewPostForm from "@/react-components/AddNewPostForm";
import PostFeed from "@/react-components/PostFeed";

export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <main>
        <AddNewPostForm />
        <div className="flex flex-row">
          <div className="flex flex-1"></div>
          <PostFeed />;<div className="flex flex-1"></div>
        </div>
      </main>
    );
  } else {
    return <PostFeed />;
  }
}
