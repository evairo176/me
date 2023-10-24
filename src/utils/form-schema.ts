import { z } from "zod";

export const CreateBlogSchema = z.object({
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
