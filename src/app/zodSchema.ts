"use client";

import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.string().url("Invalid URL for image"),
  content: z.string().min(1, "Content is required"),
});
