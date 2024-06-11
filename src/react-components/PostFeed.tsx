import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "../../prisma/db";

export default async function PostFeed() {
  const posts = await db.post.findMany({});
  return (
    <section className="flex flex-1">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardContent>
              <CardDescription className="max-w-36 line-clamp-3">
                {post.content}
              </CardDescription>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
