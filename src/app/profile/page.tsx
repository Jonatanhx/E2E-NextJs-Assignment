import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import db from "../../../prisma/db";

export default async function ProfilePage() {
  const session = await auth();

  const posts = await db.post.findMany({
    where: {
      author: {
        email: session?.user?.email!,
      },
    },
    include: {
      author: {
        select: {
          name: true,
          profilePicture: true,
        },
      },
    },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <main className="flex flex-1 justify-center flex-row">
      <div className="flex-1"></div>
      <div className="flex flex-col">
        {posts.map((post) => (
          <Card key={post.id} className="my-2" data-cy="post">
            <CardHeader>
              <div className="flex items-center border-slate-400 border-b-2">
                <Image
                  className="rounded-md mb-2"
                  src={post.author.profilePicture!}
                  alt="user submitted profile picture"
                  width={50}
                  height={50}
                ></Image>
                <p className="pl-2 text-xl"> {post.author.name}</p>
              </div>
              <CardTitle className="pt-5">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription
                className="line-clamp-3"
                style={{ maxWidth: `${post.title.length * 10}px` }}
              >
                {post.content}
              </CardDescription>
              <Image
                src={post.image}
                alt="user submitted post"
                width={300}
                height={300}
              ></Image>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex-1"></div>
    </main>
  );
}
