"use client";
import BlogContent from "@/components/elements/BlogContent";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllBlog, getAllBlogByCategorySlug } from "@/features/api/Blog";
import {
  BlogInterface,
  CategoryInterface,
  TagInterface,
} from "@/types/user-types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { PiArticleLight } from "react-icons/pi";

interface CategoryModuleInterface {
  slug: string;
}

const CategoryModule = ({ slug }: CategoryModuleInterface) => {
  // Queries fetch all blog
  const params = useParams();
  const {
    data: allCategoryBlog,
    isLoading: isLoadingBlog,
    isError: isErrorBlog,
  } = useQuery({
    queryKey: ["category_blogs", slug],
    queryFn: async () =>
      await getAllBlog({
        lang: params.lang as string,
        category: slug as string,
      }),
  });
  const dataCategoryBlog = allCategoryBlog?.blog;
  const tag: TagInterface[] = allCategoryBlog?.tagsRelevant;

  if (isLoadingBlog) {
    return (
      <>
        <BlogDetailSkeleton />
      </>
    );
  }

  if (isErrorBlog) {
    return <div>Something wrong</div>;
  }

  return (
    <section className="flex flex-row justify-between gap-3">
      <div className="flex flex-col">
        {dataCategoryBlog?.map((row: BlogInterface, key: number) => {
          return (
            <div
              key={key}
              className="p-4 lg:p-8 rounded-md border bg-card text-card-foreground mb-4"
            >
              <BlogContent blog={row} />
            </div>
          );
        })}
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

export default CategoryModule;
