import { createRoleSchema } from "@/utils/form-schema";
import { z } from "zod";

interface GetAllRoleIntercace {
  axiosAuth: any;
}

// get all role
export const getAllRole = async ({ axiosAuth }: GetAllRoleIntercace) => {
  const response = await axiosAuth.get(`/role`);

  return response.data.role;
};

interface createRole {
  axiosAuth: any;
  val: z.infer<typeof createRoleSchema>;
}

// create role
export const createRole = async ({ axiosAuth, val }: createRole) => {
  const response = await axiosAuth.post(`/role`, val);

  return response.data.role;
};

interface deleteRole {
  axiosAuth: any;
  idArray: string[];
}
// delete blog
export const deleteRole = async ({ axiosAuth, idArray }: deleteRole) => {
  const response = await axiosAuth.post(`/role/delete/multiple`, {
    idArray: idArray,
  });

  return response.data.role;
};

interface updateRole {
  axiosAuth: any;
  val: z.infer<typeof createRoleSchema>;
  id: string;
}

// update role
export const updateRole = async ({ axiosAuth, val, id }: updateRole) => {
  const response = await axiosAuth.put(`/role/${id}`, val);

  return response.data.role;
};
