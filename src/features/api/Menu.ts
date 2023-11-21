import { createMenuSchema } from "@/utils/form-schema";
import { z } from "zod";

interface createRole {
  axiosAuth: any;
  val: z.infer<typeof createMenuSchema>;
}

// create menu
export const createMenu = async ({ axiosAuth, val }: createRole) => {
  console.log(val);
  //   const response = await axiosAuth.post(`/menu`, val);

  //   return response.data.role;
};
