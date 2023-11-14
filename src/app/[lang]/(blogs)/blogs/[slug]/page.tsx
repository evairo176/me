import DetailBlogModule from "@/components/modules/Blogs/DetailBlogModule";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";
import siteConfig from "@/constans/siteConfig";
import { getDetailBlog } from "@/features/api/Blog";
import { BlogInterface } from "@/types/user-types";
import { notFound } from "next/navigation";
import React, { cache } from "react";

// const BlogBody = dynamic(() => import("@/components/elements/BlogBody"));

type Props = {};

export const getBlogData = cache(async (slug: string, lang: string) => {
  try {
    const blodDetail = await getDetailBlog({
      slug: slug,
      lang: lang as string,
    });

    return blodDetail?.blog;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching posts");
  }
});

export const generateMetadata = async ({
  params: { slug, lang },
}: {
  params: {
    slug: string;
    lang: string;
  };
}) => {
  const blog: BlogInterface = await getBlogData(slug, lang);

  return {
    title: blog?.title + " | " + lang,
    description: blog?.des,
    openGraph: {
      title: blog?.title + " | " + lang,
      description: blog?.des,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`,
      siteName: siteConfig.siteName,
      // images: [
      //   {
      //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}/opengraph-image.png`,
      //     width: 1200,
      //     height: 628,
      //   },
      // ],
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en/blogs/${slug}`,
        "id-ID": `${process.env.NEXT_PUBLIC_SITE_URL}/id/blogs/${slug}`,
        "ru-RU": `${process.env.NEXT_PUBLIC_SITE_URL}/ru/blogs/${slug}`,
        "zh-Hant": `${process.env.NEXT_PUBLIC_SITE_URL}/cn/blogs/${slug}`,
      },
    },
  };
};

interface DetailBlogInterface {
  params: {
    slug: string;
    lang: string;
  };
}

const DetailBlog = async ({ params: { slug, lang } }: DetailBlogInterface) => {
  const blog: BlogInterface = await getBlogData(slug, lang);

  if (!blog) {
    return notFound();
  }
  return <DetailBlogModule blogDetail={blog} />;
};

export default DetailBlog;
