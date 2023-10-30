import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

interface BlogDetailSkeletonProps {
  isBlogPage?: boolean;
}

const BlogDetailSkeleton = ({ isBlogPage }: BlogDetailSkeletonProps) => {
  return (
    <div className="space-y-2">
      <div>
        <Skeleton
          className={`w-full object-fit ${
            isBlogPage ? "h-[500px]" : "h-[200px]"
          }`}
        />
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
          className={`text-sm text-gray-500 leading-normal ${
            !isBlogPage && "line-clamp-3"
          }  text-justify`}
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
  );
};

export default BlogDetailSkeleton;
