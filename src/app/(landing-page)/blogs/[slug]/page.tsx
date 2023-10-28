"use client";
import BlogBody from "@/components/elements/BlogBody";
import BlogContent from "@/components/elements/BlogContent";
import SocialLink from "@/components/elements/SocialLink";
import config from "@/utils/config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

const DetailBlog = (props: Props) => {
  const { slug } = useParams();

  // Queries fetch all blog
  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => {
      const response = await axios.get(
        `${config["BACKEND_URL"]}/blogs/detail/${slug}`
      );
      return response.data.blog;
    },
    queryKey: ["blogsDetail"],
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fething data...</p>;
  }
  return (
    <div className="space-y-10">
      {/* <PostHero locale={params.lang} post={post} /> */}
      <BlogContent isBlogPage={true} blog={blog} />
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="relative">
          <div className="sticky top-20  flex items-center gap-5   md:flex-col">
            <div className="font-medium md:hidden">Share this content</div>
            <SocialLink
              isShareURL
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`}
            />
            <SocialLink
              isShareURL
              platform="twitter"
              link={`https://www.twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`}
            />
            <SocialLink
              isShareURL
              platform="linkedin"
              link={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`}
            />
          </div>
        </div>
        {/* <PostBody body={post.body} /> */}
        <BlogBody body={blog?.content} />
      </div>
    </div>
  );
};

export default DetailBlog;
