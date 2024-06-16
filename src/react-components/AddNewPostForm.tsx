"use client";
import { formSchema } from "@/app/zodSchema";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addNewPost } from "../../endpoints/post-endpoints";

export default function AddNewPostForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: "",
      content: "",
    },
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    const { title, image, content } = formData;

    const updatedFormData = {
      title,
      image,
      content,
    };

    try {
      await addNewPost(updatedFormData);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <div className="flex flex-1 justify-center">
      <Card className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-2">Title</FormLabel>
                  <FormControl>
                    <Input {...field} data-cy="title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-2">Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} data-cy="image" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Text</FormLabel>
                  <FormControl>
                    <Input {...field} data-cy="content" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              data-cy="submit-button"
              className="mt-4 hover:ring-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
