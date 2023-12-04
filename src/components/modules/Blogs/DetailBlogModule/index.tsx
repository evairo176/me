"use client";
import BlogBody from "@/components/elements/BlogBody";
import BlogContent from "@/components/elements/BlogContent";
import CtaCard from "@/components/elements/CtaCard";
import SocialLink from "@/components/elements/SocialLink";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";
import { Badge } from "@/components/ui/badge";
import {
  createComment,
  deleteComment,
  getDetailBlog,
  likeBlog,
  readBlog,
} from "@/features/api/Blog";
import useLocalStorage from "@/hooks/use-local-storage.ts";
import { CommentInterface, TagInterface } from "@/types/user-types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { TfiEye } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { alertLogin } from "@/redux/features/alertLoginSlices";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import useCookieStorage from "@/hooks/use-cookies-storage";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getHumanDate } from "@/helper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { CreateCommentSchema } from "@/utils/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// const BlogBody = dynamic(() => import("@/components/elements/BlogBody"));

interface DetailBlogModuleInterface {}

const DetailBlogModule = ({}: DetailBlogModuleInterface) => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [comment, setComment] = useState<{
    id: string;
    createBy: string;
    content: string;
    updatedAt: string;
  }>({
    id: "",
    createBy: "",
    content: "",
    updatedAt: "",
  });
  const { toast } = useToast();
  // get session
  const { data: session } = useSession();
  // Get the value from local storage if it exists
  const [cookie, setCookie] = useCookieStorage("reads", []);

  const form = useForm<z.infer<typeof CreateCommentSchema>>({
    resolver: zodResolver(CreateCommentSchema),
    defaultValues: {
      blogId: "",
      parentId: "",
      content: "",
    },
  });
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
    if (blog) {
      handleCookies();
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

  // comment
  const { mutate: submitComment, isPending: isPendingComment } = useMutation({
    mutationFn: createComment,
    onSuccess: async (response) => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["blogs", slug] });

      toast({
        variant: "default",
        title: response?.message,
        description: "Comment other blog if you want!",
      });
      setOpen(!open);
    },
    onError: (response) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Please Try Again.",
        description: response?.message,
      });
    },
  });

  // delete comment
  const { mutate: deleteCommentBlog, isPending: isPendingDeleted } =
    useMutation({
      mutationFn: deleteComment,
      onSuccess: async (response) => {
        // Invalidate and refetch
        await queryClient.invalidateQueries({ queryKey: ["blogs", slug] });
        toast({
          variant: "default",
          title: response?.message,
          description: "Comment other blog if you want!",
        });
        setModalDelete(false);
      },
      onError: (response) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Please Try Again.",
          description: response?.message,
        });
      },
    });

  const handleComment = (id?: string) => {
    setComment({
      id: "",
      createBy: "",
      content: "",
      updatedAt: "",
    });
    if (!session) {
      dispatch(alertLogin(true));
      toast({
        variant: "destructive",
        title: "Uh oh! Please login first.",
        description: "You can make action like comment and like",
      });
      return;
    }
    if (id) {
      const dataComment = blog?.Comment.filter(
        (row: CommentInterface) => row.id === id
      )[0];

      setComment({
        id: dataComment.id,
        createBy: dataComment.User.name,
        content: dataComment.content,
        updatedAt: dataComment.updatedAt,
      });
    }

    const defaultValue = {
      blogId: blog?.id,
      parentId: id,
    };

    form.reset(defaultValue);
    setOpen(!open);
  };

  const handleDeleteComment = (id?: string) => {
    setComment({
      id: "",
      createBy: "",
      content: "",
      updatedAt: "",
    });
    if (!session) {
      dispatch(alertLogin(true));
      toast({
        variant: "destructive",
        title: "Uh oh! Please login first.",
        description: "You can make action like comment and like",
      });
      return;
    }
    if (id) {
      const dataComment = blog?.Comment.filter(
        (row: CommentInterface) => row.id === id
      )[0];

      setComment({
        id: dataComment.id,
        createBy: dataComment.User.name,
        content: dataComment.content,
        updatedAt: dataComment.updatedAt,
      });
    }

    setModalDelete(!open);
  };

  const handleCookies = () => {
    if (cookie != "") {
      const checkIfSlugExist = cookie.includes(blog?.id);
      if (!checkIfSlugExist) {
        submitReadBlog({ id: blog?.id });
        setCookie([...cookie, blog?.id]);
        console.log("2 generate read slug");
      }
    } else {
      submitReadBlog({ id: blog?.id });
      setCookie([...cookie, blog?.id]);
      console.log("1 read slug");
    }
    // update cookie
    console.log(cookie);
  };

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
      <div className="flex flex-col md:flex-row gap-3 md:justify-between">
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
            <div className="rounded-md border bg-card text-card-foreground p-2 md:hidden">
              <div className="">
                <div className="font-semibold text-sm">
                  Tags Relevant For You
                </div>
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
              <Separator className="mt-2 mb-2" />
              <div className="flex gap-2 items-center justify-around">
                <div className="flex items-center gap-2">
                  <div>
                    {blog?.Comment?.filter(
                      (row: CommentInterface) => !row.parentId
                    ).length > 0 ? (
                      <Sheet>
                        <SheetTrigger asChild>
                          <FaRegComments className="cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent className="overflow-auto">
                          <div className="text-2xl font-semibold mb-8">
                            Comments
                          </div>
                          {blog?.Comment?.length > 0
                            ? blog?.Comment?.map(
                                (row: CommentInterface, key: number) => {
                                  if (!row.parentId) {
                                    return (
                                      <>
                                        <div key={key} className="">
                                          <div className="text-lg font-semibold">
                                            {row.User.name}
                                          </div>
                                          <div className="text-sm text-muted-foreground mb-1">
                                            {row.content}
                                          </div>
                                          <div className="text-xs text-muted-foreground mb-1">
                                            {getHumanDate(row.updatedAt)}
                                          </div>
                                          <div className="flex flex-row gap-2 items-center">
                                            <div
                                              onClick={() =>
                                                handleComment(row.id)
                                              }
                                              className="text-xs text-muted-foreground font-semibold cursor-pointer"
                                            >
                                              Balas
                                            </div>
                                            {row.User.id ===
                                            session?.user.id ? (
                                              <div
                                                onClick={() =>
                                                  handleDeleteComment(row.id)
                                                }
                                                className="text-xs text-muted-foreground text-red-400 font-semibold cursor-pointer"
                                              >
                                                Hapus
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>
                                        <Separator className="mt-2 mb-2" />
                                        {row?.Replay?.length > 0
                                          ? row?.Replay?.map((replay) => {
                                              return (
                                                <>
                                                  <div
                                                    key={replay.id}
                                                    className="ml-5"
                                                  >
                                                    <div className="text-xs text-muted-foreground">
                                                      Balasan for{" "}
                                                      <span className="font-semibold">
                                                        @{row.User.name}
                                                      </span>
                                                    </div>
                                                    <div className="text-lg font-semibold">
                                                      {replay.User.name}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground mb-1">
                                                      {replay.content}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mb-1">
                                                      {getHumanDate(
                                                        replay.updatedAt
                                                      )}
                                                    </div>
                                                    <div className="flex flex-row gap-2 items-center">
                                                      <div
                                                        onClick={() =>
                                                          handleComment(
                                                            replay.id
                                                          )
                                                        }
                                                        className="text-xs text-muted-foreground font-semibold cursor-pointer"
                                                      >
                                                        Balas
                                                      </div>
                                                      {replay.User.id ===
                                                      session?.user.id ? (
                                                        <div
                                                          onClick={() =>
                                                            handleDeleteComment(
                                                              replay.id
                                                            )
                                                          }
                                                          className="text-xs text-muted-foreground text-red-400 font-semibold cursor-pointer"
                                                        >
                                                          Hapus
                                                        </div>
                                                      ) : (
                                                        ""
                                                      )}
                                                    </div>
                                                  </div>
                                                  <Separator className="mt-2 mb-2" />
                                                  {replay?.Replay?.length > 0
                                                    ? replay?.Replay?.map(
                                                        (replay2) => {
                                                          return (
                                                            <>
                                                              <div
                                                                key={replay2.id}
                                                                className="ml-10"
                                                              >
                                                                <div className="text-xs text-muted-foreground">
                                                                  Balasan for{" "}
                                                                  <span className="font-semibold">
                                                                    @
                                                                    {
                                                                      replay
                                                                        .User
                                                                        .name
                                                                    }
                                                                  </span>
                                                                </div>
                                                                <div className="text-lg font-semibold">
                                                                  {
                                                                    replay2.User
                                                                      .name
                                                                  }
                                                                </div>
                                                                <div className="text-sm text-muted-foreground mb-1">
                                                                  {
                                                                    replay2.content
                                                                  }
                                                                </div>
                                                                <div className="text-xs text-muted-foreground">
                                                                  {getHumanDate(
                                                                    replay2.updatedAt
                                                                  )}
                                                                </div>
                                                                <div className="flex flex-row gap-2 items-center">
                                                                  {replay2.User
                                                                    .id ===
                                                                  session?.user
                                                                    .id ? (
                                                                    <div
                                                                      onClick={() =>
                                                                        handleDeleteComment(
                                                                          replay2.id
                                                                        )
                                                                      }
                                                                      className="text-xs text-muted-foreground text-red-400 font-semibold cursor-pointer"
                                                                    >
                                                                      Hapus
                                                                    </div>
                                                                  ) : (
                                                                    ""
                                                                  )}
                                                                </div>
                                                              </div>
                                                              <Separator className="mt-2 mb-2" />
                                                            </>
                                                          );
                                                        }
                                                      )
                                                    : ""}
                                                </>
                                              );
                                            })
                                          : ""}
                                      </>
                                    );
                                  }
                                }
                              )
                            : ""}
                          <Button
                            disabled={isPendingComment}
                            onClick={() => handleComment()}
                          >
                            Make Comment
                          </Button>
                        </SheetContent>
                      </Sheet>
                    ) : (
                      <FaRegComments
                        onClick={() => handleComment()}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {
                      blog?.Comment?.filter(
                        (row: CommentInterface) => !row.parentId
                      ).length
                    }
                  </div>
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
        <div className="relative hidden md:block">
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
                    {blog?.Comment?.filter(
                      (row: CommentInterface) => !row.parentId
                    ).length > 0 ? (
                      <Sheet>
                        <SheetTrigger asChild>
                          <FaRegComments className="cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent className="overflow-auto">
                          <div className="text-2xl font-semibold mb-8">
                            Comments
                          </div>
                          {blog?.Comment?.length > 0
                            ? blog?.Comment?.map(
                                (row: CommentInterface, key: number) => {
                                  if (!row.parentId) {
                                    return (
                                      <>
                                        <div key={key} className="">
                                          <div className="text-lg font-semibold">
                                            {row.User.name}
                                          </div>
                                          <div className="text-sm text-muted-foreground mb-1">
                                            {row.content}
                                          </div>
                                          <div className="text-xs text-muted-foreground mb-1">
                                            {getHumanDate(row.updatedAt)}
                                          </div>
                                          <div className="flex flex-row gap-2 items-center">
                                            <div
                                              onClick={() =>
                                                handleComment(row.id)
                                              }
                                              className="text-xs text-muted-foreground font-semibold cursor-pointer"
                                            >
                                              Balas
                                            </div>
                                            {row.User.id ===
                                            session?.user.id ? (
                                              <div
                                                onClick={() =>
                                                  handleDeleteComment(row.id)
                                                }
                                                className="text-xs text-muted-foreground text-red-400 font-semibold cursor-pointer"
                                              >
                                                Hapus
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>
                                        <Separator className="mt-2 mb-2" />
                                        {row?.Replay?.length > 0
                                          ? row?.Replay?.map((replay) => {
                                              return (
                                                <>
                                                  <div
                                                    key={replay.id}
                                                    className="ml-5"
                                                  >
                                                    <div className="text-xs text-muted-foreground">
                                                      Balasan for{" "}
                                                      <span className="font-semibold">
                                                        @{row.User.name}
                                                      </span>
                                                    </div>
                                                    <div className="text-lg font-semibold">
                                                      {replay.User.name}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground mb-1">
                                                      {replay.content}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mb-1">
                                                      {getHumanDate(
                                                        replay.updatedAt
                                                      )}
                                                    </div>
                                                    <div className="flex flex-row gap-2 items-center">
                                                      <div
                                                        onClick={() =>
                                                          handleComment(
                                                            replay.id
                                                          )
                                                        }
                                                        className="text-xs text-muted-foreground font-semibold cursor-pointer"
                                                      >
                                                        Balas
                                                      </div>
                                                      {replay.User.id ===
                                                      session?.user.id ? (
                                                        <div
                                                          onClick={() =>
                                                            handleDeleteComment(
                                                              replay.id
                                                            )
                                                          }
                                                          className="text-xs text-muted-foreground text-red-400 font-semibold cursor-pointer"
                                                        >
                                                          Hapus
                                                        </div>
                                                      ) : (
                                                        ""
                                                      )}
                                                    </div>
                                                  </div>
                                                  <Separator className="mt-2 mb-2" />
                                                  {replay?.Replay?.length > 0
                                                    ? replay?.Replay?.map(
                                                        (replay2) => {
                                                          return (
                                                            <>
                                                              <div
                                                                key={replay2.id}
                                                                className="ml-10"
                                                              >
                                                                <div className="text-xs text-muted-foreground">
                                                                  Balasan for{" "}
                                                                  <span className="font-semibold">
                                                                    @
                                                                    {
                                                                      replay
                                                                        .User
                                                                        .name
                                                                    }
                                                                  </span>
                                                                </div>
                                                                <div className="text-lg font-semibold">
                                                                  {
                                                                    replay2.User
                                                                      .name
                                                                  }
                                                                </div>
                                                                <div className="text-sm text-muted-foreground mb-1">
                                                                  {
                                                                    replay2.content
                                                                  }
                                                                </div>
                                                                <div className="text-xs text-muted-foreground">
                                                                  {getHumanDate(
                                                                    replay2.updatedAt
                                                                  )}
                                                                </div>
                                                                <div className="flex flex-row gap-2 items-center">
                                                                  {replay2.User
                                                                    .id ===
                                                                  session?.user
                                                                    .id ? (
                                                                    <div
                                                                      onClick={() =>
                                                                        handleDeleteComment(
                                                                          replay2.id
                                                                        )
                                                                      }
                                                                      className="text-xs text-muted-foreground text-red-400 font-semibold cursor-pointer"
                                                                    >
                                                                      Hapus
                                                                    </div>
                                                                  ) : (
                                                                    ""
                                                                  )}
                                                                </div>
                                                              </div>
                                                              <Separator className="mt-2 mb-2" />
                                                            </>
                                                          );
                                                        }
                                                      )
                                                    : ""}
                                                </>
                                              );
                                            })
                                          : ""}
                                      </>
                                    );
                                  }
                                }
                              )
                            : ""}
                          <Button
                            disabled={isPendingComment}
                            onClick={() => handleComment()}
                          >
                            Make Comment
                          </Button>
                        </SheetContent>
                      </Sheet>
                    ) : (
                      <FaRegComments
                        onClick={() => handleComment()}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {
                      blog?.Comment?.filter(
                        (row: CommentInterface) => !row.parentId
                      ).length
                    }
                  </div>
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="font-semibold">#Comment</div>
          {comment?.createBy && (
            <>
              <div className="text-lg font-semibold">{comment.createBy}</div>
              <div className="text-sm text-muted-foreground mb-1">
                {comment.content}
              </div>
              <div className="text-xs text-muted-foreground mb-1">
                {getHumanDate(comment.updatedAt)}
              </div>
              <div className="text-xs text-muted-foreground">
                Balasan for{" "}
                <span className="font-semibold">@{comment.createBy}</span>
              </div>
            </>
          )}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((val) =>
                submitComment({ axiosAuth: axiosAuth, val: val })
              )}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-full">
                    <FormControl>
                      <Textarea
                        placeholder="Make describtion your blog"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>At least 1 characters</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-right">
                <Button disabled={isPendingComment}>
                  {isPendingComment ? "Loading..." : "Comment"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Dialog open={modalDelete} onOpenChange={setModalDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              comment and remove your data from our servers.
            </DialogDescription>
            <div className="text-right">
              <Button
                variant={"destructive"}
                disabled={isPendingDeleted}
                onClick={() =>
                  deleteCommentBlog({
                    axiosAuth: axiosAuth,
                    id: comment.id,
                  })
                }
              >
                {isPendingDeleted ? "Loading..." : "Delete"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DetailBlogModule;
