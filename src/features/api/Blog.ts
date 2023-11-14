import { axiosAuth } from "@/lib/axios";
import config from "@/utils/config";
import { CreateBlogSchema } from "@/utils/form-schema";
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

// get all blog
export const getAllBlog = async ({ lang }: { lang: string }) => {
  const response = await axiosAuth.get(`/blogs?lang=${lang}`);

  return response.data.blog;
};

interface DetailBlog {
  slug: string | string[];
  lang?: string;
}

// get detail blog
export const getDetailBlog = async ({ slug, lang }: DetailBlog) => {
  const response = await axiosAuth.get(`/blogs/detail/${slug}?lang=${lang}`);

  return response.data.blog;
};

// get all blog by category slug
export const getAllBlogByCategorySlug = async ({
  lang,
  categorySlug,
}: {
  lang: string;
  categorySlug: string;
}) => {
  const response = await axiosAuth.get(
    `/blogs/category/${categorySlug}?lang=${lang}`
  );

  return response.data.blog;
};
