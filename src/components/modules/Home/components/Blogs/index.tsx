"use client";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { Button } from "@/components/ui/button";
import React from "react";
import { PiArticleLight } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "@/features/api/Blog";
import { BlogInterface } from "@/types/user-types";
import Image from "next/image";
import { dateToHumanDate } from "@/helper";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import BlogContent from "@/components/elements/BlogContent";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";
import useAxiosAuth from "@/hooks/useAxiosAuth";

type Props = {};

const Blogs = (props: Props) => {
  // Queries fetch all blog
  const axiosAuth = useAxiosAuth();
  const {
    data: blog,
    isLoading: isLoadingBlog,
    isError: isErrorBlog,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getBlog({ id: "clnye4mzg0000nls08cyb4q36" }),
  });

  if (isLoadingBlog) {
    return (
      <section className="p-4 mt-3 lg:p-8 rounded-md border bg-card text-card-foreground">
        <SectionHeading
          title="Blogs"
          icon={<PiArticleLight className="mr-2" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My Blogs.</p>
          <Button variant={"secondary"} aria-label="view all blog" asChild>
            <Link
              href={"/blogs"}
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
          <BlogDetailSkeleton />
          <BlogDetailSkeleton />
          <BlogDetailSkeleton />
        </div>
      </section>
    );
  }

  if (isErrorBlog) {
    return <div>Something wrong</div>;
  }
  return (
    <section className="p-4 mt-3 lg:p-8 rounded-md border bg-card text-card-foreground">
      <SectionHeading
        title="Blogs"
        icon={<PiArticleLight className="mr-2" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">My Blogs.</p>
        <Button variant={"secondary"} aria-label="view all blog" asChild>
          <Link
            href={"/blogs"}
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
        {blog?.map((row: BlogInterface, key: number) => {
          return <BlogContent key={key} blog={row} />;
        })}
      </div>
    </section>
  );
};

export default Blogs;
