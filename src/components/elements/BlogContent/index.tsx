import { Badge } from "@/components/ui/badge";
import { dateToHumanDate } from "@/helper";
import { BlogInterface } from "@/types/user-types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

interface BlogContentProps {
  blog: BlogInterface;
  isBlogPage?: boolean;
}
const BlogContent = ({ blog, isBlogPage }: BlogContentProps) => {
  const params = useParams();
  return (
    <div className="space-y-2">
      <div>
        <Image
          alt={blog?.title}
          src={blog?.image}
          width={200}
          height={150}
          className={`w-full object-fit ${
            isBlogPage ? "h-[500px]" : "h-[200px]"
          }`}
        />
      </div>

      <div className="text-primary font-medium text-sm mr-1 mt-3">
        {blog?.Categories?.name}
      </div>

      <div className="flex items-center mt-1">
        <div className="text-xs text-gray-500">{blog?.Author?.fullname}</div>

        <div className="w-1 h-1 bg-gray-400 rounded-full mr-1 ml-1"></div>
        <div className="text-xs text-gray-500">
          {dateToHumanDate(blog?.createdAt?.toString())}
        </div>
      </div>
      <div className="mt-1">
        <Link
          className="font-semibold text-1xl mb-1 cursor-pointer"
          href={`/${params.lang}/blogs/${blog?.slug}`}
        >
          {blog?.title}
        </Link>
        <div
          className={`text-sm text-gray-500 leading-normal ${
            !isBlogPage && "line-clamp-3"
          }  text-justify`}
        >
          {blog?.des}
        </div>
      </div>
      <div className="mt-2">
        <div className="flex flex-wrap items-center gap-1">
          {blog?.Tags?.map((row, key) => {
            return (
              <Badge key={row?.id} variant={"outline"}>
                {row?.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
