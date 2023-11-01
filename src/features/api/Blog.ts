import { axiosAuth } from "@/lib/axios";
import config from "@/utils/config";
import { CreateBlogSchema } from "@/utils/form-schema";
import { z } from "zod";

interface getBlog {
  id: string;
}
// get all blog by user
export const getBlog = async ({ id }: getBlog) => {
  const response = await axiosAuth.get(`/blogs/user/${id}`);

  return response.data.blog;
};

interface createBlog {
  axiosAuth: any;
  val: z.infer<typeof CreateBlogSchema>;
}

// create blog
export const createBlog = async ({ axiosAuth, val }: createBlog) => {
  const formData = new FormData();
  formData.append("image", val.imageBanner);
  formData.append("title", val.title);
  formData.append("content", val.content);
  formData.append("des", val.des);
  formData.append("draft", val.draft ? "1" : "0");
  formData.append("Tags", JSON.stringify(val.tags));
  formData.append("categoryId", val.category);

  const response = await axiosAuth.post(`/blogs`, formData);

  return response.data.blog;
};
interface DeleteBlog {
  id: string;
  session: string;
  axiosAuth: any;
}

// delete blog
export const deleteBlog = async ({ session, id, axiosAuth }: DeleteBlog) => {
  const configD = {
    headers: { Authorization: `Bearer ${session}` },
  };
  const response = await axiosAuth.delete(`/blogs/${id}`, configD);

  return response.data.blog;
};

// get all blog
export const getAllBlog = async () => {
  const res = await fetch(`${config["BACKEND_URL"]}/blogs`, {
    next: { revalidate: 3600 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

interface DetailBlog {
  slug: string | string[];
}

// get detail blog
export const getDetailBlog = async ({ slug }: DetailBlog) => {
  const res = await fetch(`${config["BACKEND_URL"]}/blogs/detail/${slug}`, {
    next: { revalidate: 3600 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
