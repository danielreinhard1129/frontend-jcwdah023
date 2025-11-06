"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

interface ThumbnailResponse {
  fileURL: string;
  filePath: string;
}

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  author: z.string().min(3, "Author must be at least 3 characters."),
  category: z.string().min(3, "Category must be at least 3 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  content: z.string().min(10, "Content must be at least 10 characters."),
  thumbnail: z.instanceof(File),
});

const Write = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      category: "",
      description: "",
      content: "",
      thumbnail: undefined,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      // 1. upload thumbnail ke file service backendless
      const formData = new FormData();
      const folderName = "images";
      const fileName = Date.now() + Math.floor(Math.random() * 1000);
      const baseUrl = "https://betterkiss-us.backendless.app";
      const url = `${baseUrl}/api/files/${folderName}/${fileName}`;

      formData.append("file", data.thumbnail);

      const result = await axios.post<ThumbnailResponse>(url, formData);

      // 2. create new data ke database backendless
      await axios.post(`${baseUrl}/api/data/Blogs`, {
        author: data.author,
        category: data.category,
        content: data.content,
        description: data.description,
        title: data.title,
        thumbnail: result.data.fileURL,
      });

      toast.success("Create blog success");
      router.push("/");
    } catch (error) {
      toast.error("Create blog failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-4">
        <form id="form-write" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <Input
                    {...field}
                    id="title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your title"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="author"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="author">Author</FieldLabel>
                  <Input
                    {...field}
                    id="author"
                    aria-invalid={fieldState.invalid}
                    placeholder="Author"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="category">Category</FieldLabel>
                  <Input
                    {...field}
                    id="category"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your category"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="description">Description</FieldLabel>
                  <Textarea
                    {...field}
                    id="description"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your description"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="content"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="content">Content</FieldLabel>
                  <Textarea
                    {...field}
                    id="content"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your content"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="thumbnail"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="thumbnail">Thumbnail</FieldLabel>
                  <Input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your thumbnail"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      if (file) {
                        field.onChange(file);
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Field className="w-fit">
              <Button type="submit" form="form-write" disabled={isLoading}>
                {isLoading ? "Loading" : "Submit"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default Write;
