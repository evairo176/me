"use client";
import BlogBody from "@/components/elements/BlogBody";
import BlogContent from "@/components/elements/BlogContent";
import CtaCard from "@/components/elements/CtaCard";
import SocialLink from "@/components/elements/SocialLink";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";
import { Badge } from "@/components/ui/badge";
import { getDetailBlog, likeBlog, readBlog } from "@/features/api/Blog";
import useLocalStorage from "@/hooks/use-local-storage.ts";
import { TagInterface } from "@/types/user-types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { TfiEye } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { alertLogin } from "@/redux/features/alertLoginSlices";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

// const BlogBody = dynamic(() => import("@/components/elements/BlogBody"));

interface DetailBlogModuleInterface {}

const DetailBlogModule = ({}: DetailBlogModuleInterface) => {
  const { toast } = useToast();
  // get session
  const { data: session } = useSession();
  // Get the value from local storage if it exists
  const [value, setValue] = useLocalStorage("reads", []);

  const axiosAuth = useAxiosAuth();

  const { isAlert } = useAppSelector((state) => state.alertReducer);
  const dispatch = useAppDispatch();

  // Queries fetch all blog
  const { slug, lang } = useParams();

  const {
    data: detailBlog,
    isLoading: isLoadingBlog,
    isError: isErrorBlog,
  } = useQuery({
    queryKey: ["blogs", slug],
    queryFn: async () =>
      await getDetailBlog({
        slug: slug,
        lang: lang as string,
      }),
  });
  const blog = detailBlog?.blog;
  const tag: TagInterface[] = detailBlog?.tagsRelevant;

  useEffect(() => {
    if (blog)
      if (value != "") {
        const checkIfSlugExist = value.includes(blog?.id);
        if (!checkIfSlugExist) {
          submitReadBlog({ id: blog?.id });
          setValue([...value, blog?.id]);
          console.log("2 generate read slug");
        }
      } else {
        submitReadBlog({ id: blog?.id });
        setValue([...value, blog?.id]);
        console.log("1 read slug");
      }
  }, [blog]);

  // Access the client
  const queryClient = useQueryClient();

  // Read Blog
  const { mutate: submitReadBlog, isPending: isPendingRead } = useMutation({
    mutationFn: readBlog,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["blogs", slug] });
      console.log("Read blog successfully");
    },
    onError: () => {
      console.log("Read error");
    },
  });

  // Like Blog
  const { mutate: submitLikeBlog, isPending: isPendingLike } = useMutation({
    mutationFn: likeBlog,
    onSuccess: async (response) => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["blogs", slug] });
      toast({
        variant: "default",
        title: response?.message,
        description: "Like other blog if you want!",
      });
    },
    onError: (response) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Please Try Again.",
        description: response?.message,
      });
    },
  });

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

  const handleClickLike = () => {
    if (!session) {
      dispatch(alertLogin(true));
      toast({
        variant: "destructive",
        title: "Uh oh! Please login first.",
        description: "You can make action like comment and like",
      });
      return;
    }

    submitLikeBlog({ axiosAuth, val: { blogId: blog?.id as string } });
  };

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
        <div className="space-y-10 ">
          {/* <PostHero locale={params.lang} post={post} /> */}
          <BlogContent isBlogPage={true} blog={blog} />
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="relative">
              <div className="sticky top-20  flex items-center gap-5   lg:flex-col">
                <div className="font-medium md:hidden">Share this content</div>
                <SocialLink
                  isShareURL
                  platform="facebook"
                  link={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`}
                />
                <SocialLink
                  isShareURL
                  platform="twitter"
                  link={`https://www.twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`}
                />
                <SocialLink
                  isShareURL
                  platform="linkedin"
                  link={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blogs/${slug}`}
                />
              </div>
            </div>
            {/* <PostBody body={post.body} /> */}
            <BlogBody body={blog?.content} />
            <div className="rounded-md border bg-card text-card-foreground p-2 lg:hidden">
              <div className="flex gap-2 items-center justify-around">
                <div className="flex items-center gap-2">
                  <div>
                    <FaRegComments />
                  </div>
                  <div className="text-sm text-muted-foreground">{0}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={"ghost"}
                    onClick={handleClickLike}
                    className={`cursor-pointer p-0 h-auto`}
                    disabled={isPendingLike || isLoadingBlog}
                  >
                    <AiOutlineLike />
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    {isPendingLike || isLoadingBlog ? (
                      <Skeleton className="w-[30px] h-[20px] " />
                    ) : (
                      blog?.total_likes
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <TfiEye />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {isPendingRead || isLoadingBlog ? (
                      <Skeleton className="w-[30px] h-[20px] " />
                    ) : (
                      blog?.total_reads
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CtaCard />
        </div>
        <div className="relative hidden lg:block">
          <div className="w-52 sticky top-20 flex flex-col gap-3">
            <div className="rounded-md border bg-card text-card-foreground p-2">
              <div className="font-semibold text-sm">Tags Relevant For You</div>
              <div className="mt-2 flex flex-row flex-wrap gap-2">
                {tag?.map((row, key) => {
                  return (
                    <Badge variant={"outline"} key={key}>
                      <span className="text-xs mr-2">
                        {"#" + row?.blogCount}
                      </span>
                      {row?.name}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="rounded-md border bg-card text-card-foreground p-2">
              <div className="font-semibold text-sm">#Discuss</div>
              <div className="flex gap-2 items-center justify-around">
                <div className="flex items-center gap-2">
                  <div>
                    <FaRegComments />
                  </div>
                  <div className="text-sm text-muted-foreground">{0}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={"ghost"}
                    onClick={handleClickLike}
                    className={`cursor-pointer p-0 h-auto`}
                    disabled={isPendingLike || isLoadingBlog}
                  >
                    <AiOutlineLike />
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    {isPendingLike || isLoadingBlog ? (
                      <Skeleton className="w-[30px] h-[20px] " />
                    ) : (
                      blog?.total_likes
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <TfiEye />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {isPendingRead || isLoadingBlog ? (
                      <Skeleton className="w-[30px] h-[20px] " />
                    ) : (
                      blog?.total_reads
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlogModule;
