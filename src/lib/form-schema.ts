import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email Link is required" })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password Link is required" }),
});
