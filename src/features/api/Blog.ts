import { axiosAuth } from "@/lib/axios";
import config from "@/utils/config";
import { CreateBlogSchema, CreateCommentSchema } from "@/utils/form-schema";
import { z } from "zod";

interface getBlog {
  id: string;
  lang: string;
}
// get all blog by user
export const getBlog = async ({ id, lang }: getBlog) => {
  const response = await axiosAuth.get(`/blogs/user/${id}?lang=${lang}`);

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
  formData.append("slug", val.slug);
  formData.append("lang", val.lang);

  const response = await axiosAuth.post(`/blogs`, formData);

  return response.data.blog;
};

interface DeleteBlog {
  axiosAuth: any;
  idArray: string[];
}

// delete blog
export const deleteBlog = async ({ axiosAuth, idArray }: DeleteBlog) => {
  const response = await axiosAuth.post(`/blogs/delete/multiple`, {
    idArray: idArray,
  });

  return response.data.role;
};

// delete blog
// export const deleteBlog = async ({ session, id, axiosAuth }: DeleteBlog) => {
//   const configD = {
//     headers: { Authorization: `Bearer ${session}` },
//   };
//   const response = await axiosAuth.delete(`/blogs/${id}`, configD);

//   return response.data.blog;
// };

interface getAllBlogInterface {
  lang?: string;
  category?: string;
  user?: string;
  limit?: number;
}

// get all blog
export const getAllBlog = async ({
  lang,
  category,
  user,
  limit,
}: getAllBlogInterface) => {
  const langSlug = lang ? `?lang=${lang}` : "";
  const categorySlug = category ? `&category=${category}` : "";
  const userQuery = user ? `&user=${user}` : "";
  const limitQuery = limit ? `&limit=${limit}` : "";
  try {
    const response = await axiosAuth.get(
      `/blogs${langSlug}${categorySlug}${userQuery}${limitQuery}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

interface DetailBlog {
  slug: string | string[];
  lang?: string;
}

// get detail blog
export const getDetailBlog = async ({ slug, lang }: DetailBlog) => {
  try {
    const response = await axiosAuth.get(`/blogs/detail/${slug}?lang=${lang}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// get all blog by category slug
export const getAllBlogByCategorySlug = async ({
  lang,
  categorySlug,
}: {
  lang: string;
  categorySlug: string;
}) => {
  try {
    const response = await axiosAuth.get(
      `/blogs/category/${categorySlug}?lang=${lang}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

interface readBlogInterface {
  id: string;
}
// read blog
export const readBlog = async ({ id }: readBlogInterface) => {
  const response = await axiosAuth.put(`/blogs/read/${id}`);

  return response.data.blog;
};

interface likeBlogInterface {
  axiosAuth: any;
  val: { blogId: string };
}

// like blog
export const likeBlog = async ({ axiosAuth, val }: likeBlogInterface) => {
  const response = await axiosAuth.post(`/blogs/like`, val);

  return response.data;
};

interface commentBlogInterface {
  axiosAuth: any;
  val: z.infer<typeof CreateCommentSchema>;
}
// comment blog
export const createComment = async ({
  axiosAuth,
  val,
}: commentBlogInterface) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await axiosAuth.post(`/blogs/comment`, val, headers);

  return response.data;
};

interface deleteCommentBlog {
  axiosAuth: any;
  id: string;
}

// delete comment blog
export const deleteComment = async ({ axiosAuth, id }: deleteCommentBlog) => {
  const response = await axiosAuth.delete(`/blogs/comment/${id}`);

  return response.data;
};
