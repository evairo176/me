import BlogContent from "@/components/elements/BlogContent";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllBlog, getBlog } from "@/features/api/Blog";
import { BlogInterface, TagInterface } from "@/types/user-types";
import Link from "next/link";
import React, { cache } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { PiArticleLight } from "react-icons/pi";

type Props = {};

const getAllBlogData = cache(async (lang: string) => {
  try {
    const allBlog = await getAllBlog({ lang: lang as string });

    return allBlog;
  } catch (error) {
    console.log(error);
  }
});

export const revalidate = 1800; // revalidate at every 10 seconds

const Blog = async ({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) => {
  // Queries fetch all blog
  const allBlog = await getAllBlogData(lang);
  const dataBlog = allBlog?.blog;
  const tag: TagInterface[] = allBlog?.tagsRelevant;

  return (
    <section className="flex flex-row gap-3 justify-between">
      <div className="flex flex-col">
        {dataBlog?.length > 0 ? (
          dataBlog?.map((row: BlogInterface, key: number) => {
            return (
              <div
                key={key}
                className="p-4 lg:p-8 rounded-md border bg-card text-card-foreground mb-4"
              >
                <BlogContent blog={row} />
              </div>
            );
          })
        ) : (
          <div>Sorry data not found</div>
        )}
      </div>
      <div className="relative hidden md:block ">
        <div className="w-52 sticky top-20 flex flex-col gap-3">
          <div className="rounded-md border bg-card text-card-foreground p-2">
            <div className="font-semibold text-sm">Tags Relevant For You</div>
            <div className="mt-2 flex flex-row flex-wrap gap-2">
              {tag?.map((row, key) => {
                return (
                  <Badge variant={"outline"} key={key}>
                    <span className="text-xs mr-2">{"#" + row?.blogCount}</span>
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
    </section>
  );
};

export default Blog;
