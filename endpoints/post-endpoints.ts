"use server";

import { formSchema } from "@/app/zodSchema";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import db from "../prisma/db";

export async function deletePost(postId: number) {
  try {
    await db.post.delete({
      where: { id: postId },
    });
  } catch (error) {
    throw new Error("Failed to create a post");
  }
  revalidatePath("/profile");
}

export async function addNewPost(formData: z.infer<typeof formSchema>) {
  const session = await auth();

  try {
    const loggedInUser = await db.user.findFirst({
      where: { email: session?.user?.email! },
    });

    if (!loggedInUser) {
      throw new Error("User not found");
    }

    await db.post.create({
      data: {
        title: formData.title,
        image: formData.image,
        content: formData.content,
        author: {
          connect: { email: loggedInUser.email },
        },
      },
    });
  } catch (error) {
    throw new Error("Failed to create a post");
  }
  revalidatePath("/");
}
