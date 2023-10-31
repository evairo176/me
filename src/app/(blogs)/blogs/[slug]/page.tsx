"use client";
import BlogBody from "@/components/elements/BlogBody";
import BlogContent from "@/components/elements/BlogContent";
import CtaCard from "@/components/elements/CtaCard";
import SocialLink from "@/components/elements/SocialLink";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";
import { getDetailBlog } from "@/features/api/Blog";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

type Props = {};

const DetailBlog = (props: Props) => {
  const { slug } = useParams();

  // Queries fetch all blog
  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => await getDetailBlog({ slug: slug }),
    queryKey: ["blogsDetail"],
  });

  if (isLoading) {
    return <BlogDetailSkeleton />;
  }
  if (isError) {
    return <p>Error fething data...</p>;
  }
  return (
    <>
      <div className="mb-4">
        <Link
          className="flex gap-3 items-center group cursor-pointer"
          href={"/blogs"}
        >
          <BsArrowLeftCircle className="w-5 h-5 group-hover:mr-3 transition-all duration-300" />
          <span className="font-semibold text-2xl">Back</span>
        </Link>
      </div>
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
        <CtaCard />
      </div>
    </>
  );
};

export default DetailBlog;
