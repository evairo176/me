import DetailBlogModule from "@/components/modules/Blogs/DetailBlogModule";
import siteConfig from "@/constans/siteConfig";
import { getDetailBlog } from "@/features/api/Blog";
import { BlogInterface } from "@/types/user-types";
import React from "react";

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
  const blog: BlogInterface = await getDetailBlog({
    slug: slug,
    lang: lang as string,
  });

  return {
    title: blog?.title,
    description: blog?.content,
    openGraph: {
      title: blog?.title + " " + lang,
      description: blog?.content,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`,
      siteName: siteConfig.siteName,
      // images: [
      //   {
      //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}/opengraph-image.png`,
      //     width: 1200,
      //     height: 628,
      //   },
      // ],
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${slug}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en/blogs/${slug}`,
        "id-ID": `${process.env.NEXT_PUBLIC_SITE_URL}/id/blogs/${slug}`,
        "ru-RU": `${process.env.NEXT_PUBLIC_SITE_URL}/ru/blogs/${slug}`,
        "cn-CN": `${process.env.NEXT_PUBLIC_SITE_URL}/cn/blogs/${slug}`,
      },
    },
  };
};

const DetailBlog = (props: Props) => {
  return <DetailBlogModule />;
};

export default DetailBlog;
