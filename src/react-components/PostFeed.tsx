import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import db from "../../prisma/db";

export default async function PostFeed() {
  const posts = await db.post.findMany({});
  return (
    <section className="flex flex-1">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
