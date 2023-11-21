import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required" }),
});

export const CreateBlogSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters" }),
  slug: z
    .string({ required_error: "Slug is required" })
    .min(3, { message: "Slug must be at least 3 characters" }),
  lang: z.string({ required_error: "Lang is required" }),
  tags: z
    .string({ required_error: "Tag Stack is required" })
    .array()
    .nonempty({ message: "Tag must be at least 1 data" }),
  draft: z.boolean().default(false),
  category: z.string({ required_error: "You need to select a location" }),
  des: z
    .string({ required_error: "Description is required" })
    .min(3, { message: "Description must be at least 3 characters" }),
  content: z
    .string({ required_error: "Content is required" })
    .min(1, { message: "Content must be at least 1 characters" }),
  imageBanner: z.any(),
});

export const UpdateBlogSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters" }),
  tags: z
    .string({ required_error: "Tag Stack is required" })
    .array()
    .nonempty({ message: "Tag must be at least 1 data" }),
  draft: z.boolean().default(false),
  category: z.string({ required_error: "You need to select a location" }),
  des: z
    .string({ required_error: "Description is required" })
    .min(3, { message: "Description must be at least 3 characters" }),
  content: z
    .string({ required_error: "Content is required" })
    .min(1, { message: "Content must be at least 1 characters" }),
  imageBanner: z.any(),
});

export const createRoleSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
  status: z.boolean().default(false),
});

export const createMenuSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
  url: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
  status: z.boolean().default(false),
  roles: z.any(),
});
