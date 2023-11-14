import { axiosAuth } from "@/lib/axios";

// get all role
export const getAllLanguage = async () => {
  const response = await axiosAuth.get(`/language`);

  return response.data.language;
};
