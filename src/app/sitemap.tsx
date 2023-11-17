import { getAllBlog } from "@/features/api/Blog";
import { BlogInterface } from "@/types/user-types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL as string;

  // Get all Posts
  const allBlog = await getAllBlog({ lang: "" });
  const dataBlog = allBlog?.blog;
  //   console.log(data);

  const blogLinks = dataBlog?.map((blog: BlogInterface) => {
    return [
      {
        url: `${baseURL}/en/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
      },
      {
        url: `${baseURL}/id/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
      },
      {
        url: `${baseURL}/cn/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
      },
      {
        url: `${baseURL}/ru/blogs/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
      },
    ];
  });

  //   // Get Categories
  //   const categories = await directus.items("category").readByQuery({
  //     fields: ["slug", "date_updated"],
  //   });
  const categoryLinks: any[] = [];
  //   const categoryLinks = categories?.data?.map((category) => {
  //     return [
  //       {
  //         url: `${baseURL}/en/${category.slug}`,
  //         lastModified: new Date(),
  //       },
  //       {
  //         url: `${baseURL}/id/${category.slug}`,
  //         lastModified: new Date(),
  //       },
  //       {
  //         url: `${baseURL}/${category.slug}`,
  //         lastModified: new Date(),
  //       },
  //     ];
  //   });

  // get all url
  const dynamicLinks = blogLinks?.concat(categoryLinks ?? []).flat() ?? [];

  return [
    {
      url: `${baseURL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/id`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/ru`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/cn`,
      lastModified: new Date(),
    },
    ...dynamicLinks,
  ];
}
