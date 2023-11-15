import BlogContent from "@/components/elements/BlogContent";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogInterface, CategoryInterface } from "@/types/user-types";
import Link from "next/link";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { PiArticleLight } from "react-icons/pi";

interface CategoryModuleInterface {
  AllBlogByCategory: CategoryInterface;
}

const CategoryModule = ({ AllBlogByCategory }: CategoryModuleInterface) => {
  return (
    <section className="flex flex-row justify-between gap-3">
      <div className="flex flex-col">
        {AllBlogByCategory?.Blog.length > 0 ? (
          AllBlogByCategory?.Blog.map((row: BlogInterface, key: number) => {
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
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, key) => {
                return (
                  <Badge variant={"outline"} key={key}>
                    abc
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
