"use client";

import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(2).max(25),
  image: z.string().url(),
  content: z.string().min(10).max(100),
});
