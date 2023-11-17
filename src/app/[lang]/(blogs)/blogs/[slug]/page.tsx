import DetailBlogModule from "@/components/modules/Blogs/DetailBlogModule";
import siteConfig from "@/constans/siteConfig";
import { getDetailBlog } from "@/features/api/Blog";
import { BlogInterface, TagInterface } from "@/types/user-types";
import { notFound } from "next/navigation";
import React, { cache } from "react";

// const BlogBody = dynamic(() => import("@/components/elements/BlogBody"));

type Props = {};

export const generateMetadata = async ({
  params: { slug, lang },
}: {
  params: {
    slug: string;
    lang: string;
  };
}) => {
  const blogDetail = await getBlogData(slug, lang);
  const blog: BlogInterface = blogDetail?.blog;

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

const getBlogData = cache(async (slug: string, lang: string) => {
  try {
    const blodDetail = await getDetailBlog({
      slug: slug,
      lang: lang as string,
    });

    return blodDetail;
  } catch (error) {
    console.log(error);
  }
});

export const revalidate = 10; // revalidate at every 10 seconds

interface DetailBlogInterface {
  params: {
    slug: string;
    lang: string;
  };
}

const DetailBlog = async ({ params: { slug, lang } }: DetailBlogInterface) => {
  const blogDetail = await getBlogData(slug, lang);
  const blog: BlogInterface = blogDetail?.blog;
  const tag = blogDetail?.tagsRelevant;

  if (!blog) {
    return notFound();
  }

  return <DetailBlogModule blogDetail={blog} tag={tag} />;
};

export default DetailBlog;
