"use server";

import { formSchema } from "@/app/zodSchema";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import db from "../prisma/db";

export async function addNewPost(formData: z.infer<typeof formSchema>) {
  try {
    await db.post.create({
      data: {
        title: formData.title,
        image: formData.image,
        content: formData.content,
        author: {
          connect: { id: 1 },
        },
      },
    });
  } catch (error) {
    throw new Error("Failed to create a post");
  }
  revalidatePath("/");
}
