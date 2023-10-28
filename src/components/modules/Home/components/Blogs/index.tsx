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

type Props = {};

const Blogs = (props: Props) => {
  // Queries fetch all blog
  const {
    data: blog,
    isLoading: isLoadingBlog,
    isError: isErrorBlog,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getBlog({ id: "clnye4mzg0000nls08cyb4q36" }),
  });

  if (isLoadingBlog) {
    return <div>Loading..</div>;
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
        <Button
          variant={"secondary"}
          aria-label="view all blog"
          className="flex gap-2 transition-all duration-300 items-center "
        >
          <span>View all Blogs</span>
          <div className="overflow-hidden dark:border-neutral-500">
            <BiDotsVerticalRounded className="animate-rain-arrow" />
          </div>
        </Button>
      </SectionSubHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        {blog &&
          blog?.map((row: BlogInterface, key: number) => {
            return (
              <div key={key} className="bg-card text-card-foreground ">
                <div>
                  <Image
                    alt={row?.title}
                    src={row?.image}
                    width={200}
                    height={150}
                    className="w-full object-fit h-[200px]"
                  />
                </div>

                <div className="text-primary font-medium text-sm mr-1 mt-3">
                  {row?.Categories?.name}
                </div>

                <div className="flex items-center mt-1">
                  <div className="text-xs text-gray-500">
                    {row?.Author.fullname}
                  </div>

                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-1 ml-1"></div>
                  <div className="text-xs text-gray-500">
                    {dateToHumanDate(row.createdAt.toString())}
                  </div>
                </div>
                <div className="mt-1">
                  <Link href={`/blogs/${row?.slug}`}>
                    <div className="font-semibold text-1xl mb-1 cursor-pointer">
                      {row?.title}
                    </div>
                  </Link>
                  <div className="text-sm text-gray-500 leading-normal line-clamp-3 text-justify">
                    {row?.des}
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex flex-wrap items-center gap-1">
                    {row?.Tags.map((row, key) => {
                      return (
                        <Badge key={row.id} variant={"outline"}>
                          {row.name}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Blogs;
