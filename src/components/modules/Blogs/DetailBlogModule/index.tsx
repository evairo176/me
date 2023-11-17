"use client";
import BlogBody from "@/components/elements/BlogBody";
import BlogContent from "@/components/elements/BlogContent";
import CtaCard from "@/components/elements/CtaCard";
import SocialLink from "@/components/elements/SocialLink";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";
import { Badge } from "@/components/ui/badge";
import { getDetailBlog } from "@/features/api/Blog";
import { BlogInterface, TagInterface } from "@/types/user-types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

// const BlogBody = dynamic(() => import("@/components/elements/BlogBody"));

interface DetailBlogModuleInterface {
  blogDetail: BlogInterface;
  tag: TagInterface[];
}

const DetailBlogModule = ({ blogDetail, tag }: DetailBlogModuleInterface) => {
  const { slug, lang } = useParams();

  return (
    <>
      <div className="flex flex-row gap-3 justify-between">
        <div className="space-y-10">
          {/* <PostHero locale={params.lang} post={post} /> */}
          <BlogContent isBlogPage={true} blog={blogDetail} />
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="relative">
              <div className="sticky top-20  flex items-center gap-5   md:flex-col">
                <div className="font-medium md:hidden">Share this content</div>
                <SocialLink
                  isShareURL
                  platform="facebook"
                  link={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`}
                />
                <SocialLink
                  isShareURL
                  platform="twitter"
                  link={`https://www.twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`}
                />
                <SocialLink
                  isShareURL
                  platform="linkedin"
                  link={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`}
                />
              </div>
            </div>
            {/* <PostBody body={post.body} /> */}
            <BlogBody body={blogDetail?.content} />
          </div>
          <CtaCard />
        </div>
        <div className="relative hidden md:block ">
          <div className="w-52 sticky top-20 flex flex-col gap-3">
            <div className="rounded-md border bg-card text-card-foreground p-2">
              <div className="font-semibold text-sm">Tags Relevant For You</div>
              <div className="mt-2 flex flex-row flex-wrap gap-2">
                {tag?.map((row, key) => {
                  return (
                    <Badge variant={"outline"} key={key}>
                      <span className="text-xs mr-2">
                        {"#" + row?.blogCount}
                      </span>
                      {row?.name}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="rounded-md border bg-card text-card-foreground p-2">
              <div className="font-semibold text-sm">#Discuss</div>
              <div className="comment">comment</div>
              <div>Like</div>
              <div>Read</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBlogModule;
