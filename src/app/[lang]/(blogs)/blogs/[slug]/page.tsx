import DetailBlogModule from "@/components/modules/Blogs/DetailBlogModule";
import siteConfig from "@/constans/siteConfig";
import { getDetailBlog } from "@/features/api/Blog";
import { authOptions } from "@/helper";
import { BlogInterface } from "@/types/user-types";
import { getServerSession } from "next-auth";
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

export const revalidate = 1800; // revalidate at every 10 seconds

interface DetailBlogInterface {
  params: {
    slug: string;
    lang: string;
  };
}

const DetailBlog = async ({ params: { slug, lang } }: DetailBlogInterface) => {
  return <DetailBlogModule />;
};

export default DetailBlog;
