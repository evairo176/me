"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dateToHumanDate } from "@/helper";
import { BlogInterface } from "@/types/user-types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { deleteBlog, getBlog } from "@/features/api/Blog";
import useAxiosAuth from "@/hooks/useAxiosAuth";

type Props = {};

const Blog = (props: Props) => {
  const { data: session } = useSession();
  const axiosAuth = useAxiosAuth();
  // Queries fetch all blog
  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getBlog({ id: session?.user.id as string }),
  });

  // Access the client
  const queryClient = useQueryClient();

  // Mutations delete
  const { mutate: deleteBlogMutation, isPending: isPendingDeleted } =
    useMutation({
      mutationFn: deleteBlog,
      onSuccess: async () => {
        // Invalidate and refetch
        await queryClient.invalidateQueries({ queryKey: ["blogs"] });
        toast.success("Data deleted successfully");
      },
      onError: (error) => {
        console.log(error);
        toast.error("Please Try Again");
      },
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="rounded-md border bg-card text-card-foreground p-3">
      <div className="flex flex-row justify-end items-center">
        <Button asChild>
          <Link href="/admin/blog/create">Create Blog</Link>
        </Button>
      </div>
      <Tabs defaultValue="publish" className="w-full">
        <TabsList>
          <TabsTrigger value="publish">Publish</TabsTrigger>
          <TabsTrigger value="not_publish">Not Publish</TabsTrigger>
        </TabsList>
        <TabsContent value="publish">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dataBlog &&
              dataBlog?.map((row: BlogInterface, key: number) => {
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
                        {row?.Author?.fullname}
                      </div>

                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-1 ml-1"></div>
                      <div className="text-xs text-gray-500">
                        {dateToHumanDate(row.createdAt.toString())}
                      </div>
                    </div>
                    <div className="mt-1">
                      <Link href={`/admin/blog/${row.id}`}>
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
                    <div className="mt-2 flex justify-end">
                      <Button
                        disabled={isPendingDeleted}
                        onClick={() =>
                          deleteBlogMutation({
                            id: row.id,
                            session: session?.user.token as string,
                            axiosAuth: axiosAuth,
                          })
                        }
                        variant={"destructive"}
                        className="rounded-none"
                      >
                        <MdDeleteOutline className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={"warning"}
                        className="rounded-none"
                        asChild
                      >
                        <Link href={`/admin/blog/edit/${row.id}`}>
                          <HiOutlinePencilAlt className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </TabsContent>
        <TabsContent value="not_publish">
          <div className="p-4 lg:p-8 rounded-md border bg-card text-card-foreground">
            not publish
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Blog;
