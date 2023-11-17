import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

interface BlogDetailSkeletonProps {
  isBlogPage?: boolean;
}

const BlogDetailSkeleton = ({ isBlogPage }: BlogDetailSkeletonProps) => {
  return (
    <section className="flex flex-row gap-3 justify-between">
      <div className="p-4 lg:p-8 rounded-md border bg-card text-card-foreground mb-4 w-full">
        <div className="space-y-2 relative w-full">
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
      </div>
      <div className="relative hidden md:block">
        <div className="w-52 sticky top-20 flex flex-col gap-3">
          <div className="rounded-md border bg-card text-card-foreground p-2">
            <div className="font-semibold text-sm">Tags Relevant For You</div>
            <div className="mt-2 flex flex-row flex-wrap gap-2">
              {[0, 1, 2, 3, 4, 5].map((row, key) => {
                return <Skeleton key={key} className="w-[50px] h-[20px] " />;
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

export default BlogDetailSkeleton;
