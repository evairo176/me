import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { Button } from "@/components/ui/button";
import React from "react";
import { PiArticleLight } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BlogInterface } from "@/types/user-types";
import Link from "next/link";
import BlogContent from "@/components/elements/BlogContent";

interface BlogsInterface {
  lang: string;
  allBlog: BlogInterface[];
}

const Blogs = ({ lang, allBlog }: BlogsInterface) => {
  return (
    <section className="p-4 mt-3 lg:p-8 rounded-md border bg-card text-card-foreground">
      <SectionHeading
        title="Blogs"
        icon={<PiArticleLight className="mr-2" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">My Blogs.</p>
        <Button variant={"secondary"} asChild>
          <Link
            href={`/${lang}/blogs`}
            aria-label="view all blog page"
            className="flex gap-2 transition-all duration-300 items-center"
          >
            <span>View all Blogs</span>
            <div className="overflow-hidden dark:border-neutral-500">
              <BiDotsVerticalRounded className="animate-rain-arrow" />
            </div>
          </Link>
        </Button>
      </SectionSubHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        {allBlog?.map((row, key: number) => {
          return <BlogContent key={key} blog={row} />;
        })}
      </div>
    </section>
  );
};

export default Blogs;
