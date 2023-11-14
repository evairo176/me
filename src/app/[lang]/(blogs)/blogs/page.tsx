import BlogContent from "@/components/elements/BlogContent";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { Button } from "@/components/ui/button";
import { getAllBlog, getBlog } from "@/features/api/Blog";
import { BlogInterface } from "@/types/user-types";
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

const Blog = async ({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) => {
  // Queries fetch all blog
  const dataBlog = await getAllBlogData(lang);

  return (
    <section className="p-4 mt-3 lg:p-8 rounded-md border bg-card text-card-foreground">
      <SectionHeading
        title="Blogs"
        icon={<PiArticleLight className="mr-2" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">My Blogs.</p>
        <Button variant={"secondary"} aria-label="Back To Home" asChild>
          <Link
            href={"/"}
            className="flex gap-2 transition-all duration-300 items-center"
          >
            <div className="overflow-hidden dark:border-neutral-500">
              <BsArrowLeftCircle className="animate-rain-arrow" />
            </div>
            <span>Back To Home</span>
          </Link>
        </Button>
      </SectionSubHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        {dataBlog?.map((row: BlogInterface, key: number) => {
          return <BlogContent key={key} blog={row} />;
        })}
      </div>
    </section>
  );
};

export default Blog;
