import { BlogInterface } from "@/types/user-types";
import config from "@/utils/config";
import { CreateBlogSchema } from "@/utils/form-schema";
import axios from "axios";
import { z } from "zod";

interface getBlog {
  id: string;
}

export const getBlog = async ({ id }: getBlog) => {
  const response = await axios.get(`${config["BACKEND_URL"]}/blogs/user/${id}`);

  return response.data.blog;
};

interface createBlog {
  session: string;
  val: z.infer<typeof CreateBlogSchema>;
}

export const createBlog = async ({ session, val }: createBlog) => {
  const configD = {
    headers: { Authorization: `Bearer ${session}` },
  };

  const formData = new FormData();
  formData.append("image", val.imageBanner);
  formData.append("title", val.title);
  formData.append("content", val.content);
  formData.append("des", val.des);
  formData.append("draft", val.draft ? "1" : "0");
  formData.append("Tags", JSON.stringify(val.tags));
  formData.append("categoryId", val.category);

  const response = await axios.post(
    `${config["BACKEND_URL"]}/blogs`,
    formData,
    configD
  );

  return response.data.blog;
};
interface DeleteBlog {
  id: string;
  session: string;
}
export const deleteBlog = async ({ session, id }: DeleteBlog) => {
  const configD = {
    headers: { Authorization: `Bearer ${session}` },
  };
  const response = await axios.delete(
    `${config["BACKEND_URL"]}/blogs/${id}`,
    configD
  );

  return response.data.blog;
};
