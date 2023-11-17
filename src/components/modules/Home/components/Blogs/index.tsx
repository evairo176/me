import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { Button } from "@/components/ui/button";
import React from "react";
import { PiArticleLight } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BlogInterface } from "@/types/user-types";
import Link from "next/link";
import BlogContent from "@/components/elements/BlogContent";
import { useQuery } from "@tanstack/react-query";
import { getAllBlog } from "@/features/api/Blog";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogsInterface {
  lang: string;
}

const Blogs = ({ lang }: BlogsInterface) => {
  // Queries fetch all blog

  const {
    data: dataBlog,
    isLoading: isLoadingBlog,
    isError: isErrorBlog,
  } = useQuery({
    queryKey: ["blogs", "clnye4mzg0000nls08cyb4q36"],
    queryFn: async () =>
      await getAllBlog({
        lang: lang as string,
        user: "clnye4mzg0000nls08cyb4q36",
        limit: 3,
      }),
  });
  const allBlog: BlogInterface[] = dataBlog?.blog;

  if (isLoadingBlog) {
    return (
      <>
        <section className="p-4 mt-3 lg:p-8 rounded-md border bg-card text-card-foreground">
          <SectionHeading
            title="Blogs"
            icon={<PiArticleLight className="mr-2" />}
          />
          <SectionSubHeading>
            <p className="dark:text-neutral-400">My Blogs.</p>
            <Button variant={"secondary"} asChild>
              <Link
                aria-label="view all blog"
                href={`/${lang}/blogs`}
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
            <div className="space-y-2">
              <div>
                <Skeleton className={`w-full object-fit  h-[200px]`} />
              </div>

              <div className="text-primary font-medium text-sm mr-1 mt-3">
                <Skeleton className="w-[100px] h-[20px] " />
              </div>

              <div className="flex items-center mt-1">
                <div className="text-xs text-gray-500">
                  {" "}
                  <Skeleton className="w-[100px] h-[20px] " />
                </div>

                <div className="w-1 h-1 bg-gray-400 rounded-full mr-1 ml-1"></div>
                <div className="text-xs text-gray-500">
                  <Skeleton className="w-[100px] h-[20px] " />
                </div>
              </div>
              <div className="mt-1">
                <Skeleton className="max-w-[400px] h-[20px] mb-1" />
                <div
                  className={`text-sm text-gray-500 leading-normal  text-justify`}
                >
                  <Skeleton className="w-full h-[100px] " />
                </div>
              </div>
              <div className="mt-2">
                <div className="flex flex-wrap items-center gap-1">
                  <Skeleton className="w-[50px] h-[20px] " />
                  <Skeleton className="w-[50px] h-[20px] " />
                  <Skeleton className="w-[50px] h-[20px] " />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <Skeleton className={`w-full object-fit  h-[200px]`} />
              </div>

              <div className="text-primary font-medium text-sm mr-1 mt-3">
                <Skeleton className="w-[100px] h-[20px] " />
              </div>

              <div className="flex items-center mt-1">
                <div className="text-xs text-gray-500">
                  {" "}
                  <Skeleton className="w-[100px] h-[20px] " />
                </div>

                <div className="w-1 h-1 bg-gray-400 rounded-full mr-1 ml-1"></div>
                <div className="text-xs text-gray-500">
                  <Skeleton className="w-[100px] h-[20px] " />
                </div>
              </div>
              <div className="mt-1">
                <Skeleton className="max-w-[400px] h-[20px] mb-1" />
                <div
                  className={`text-sm text-gray-500 leading-normal  text-justify`}
                >
                  <Skeleton className="w-full h-[100px] " />
                </div>
              </div>
              <div className="mt-2">
                <div className="flex flex-wrap items-center gap-1">
                  <Skeleton className="w-[50px] h-[20px] " />
                  <Skeleton className="w-[50px] h-[20px] " />
                  <Skeleton className="w-[50px] h-[20px] " />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <Skeleton className={`w-full object-fit  h-[200px]`} />
              </div>

              <div className="text-primary font-medium text-sm mr-1 mt-3">
                <Skeleton className="w-[100px] h-[20px] " />
              </div>

              <div className="flex items-center mt-1">
                <div className="text-xs text-gray-500">
                  {" "}
                  <Skeleton className="w-[100px] h-[20px] " />
                </div>

                <div className="w-1 h-1 bg-gray-400 rounded-full mr-1 ml-1"></div>
                <div className="text-xs text-gray-500">
                  <Skeleton className="w-[100px] h-[20px] " />
                </div>
              </div>
              <div className="mt-1">
                <Skeleton className="max-w-[400px] h-[20px] mb-1" />
                <div
                  className={`text-sm text-gray-500 leading-normal  text-justify`}
                >
                  <Skeleton className="w-full h-[100px] " />
                </div>
              </div>
              <div className="mt-2">
                <div className="flex flex-wrap items-center gap-1">
                  <Skeleton className="w-[50px] h-[20px] " />
                  <Skeleton className="w-[50px] h-[20px] " />
                  <Skeleton className="w-[50px] h-[20px] " />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
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
        <Button variant={"secondary"} asChild>
          <Link
            href={`/${lang}/blogs`}
            aria-label="View all Blogs"
            className="flex gap-2 transition-all duration-300 items-center"
          >
            View all Blogs
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
