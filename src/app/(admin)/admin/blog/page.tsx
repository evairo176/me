"use client";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dateToHumanDate } from "@/helper";
import { BlogInterface, UserInterface } from "@/types/user-types";
import config from "@/utils/config";
import axios from "axios";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

type Props = {};

// A function to fetch data from the API
const fetchData = async (session: any) => {
  const configD = {
    headers: { Authorization: `Bearer ${session.user.token}` },
  };
  try {
    const response = await axios.get(
      `${config["BACKEND_URL"]}/users/${session.user.id}`,
      configD
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const Blog = (props: Props) => {
  //   // Access the client
  //   const queryClient = useQueryClient();
  const { data: session } = useSession();
  // Queries
  const { data, isLoading, isError } = useQuery(
    "blogs",
    () => fetchData(session ? session : ""),
    {
      enabled: !!session, // Enable the query only if there is an authenticated session);
    }
  );

  console.log({ data, isLoading, isError });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
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
          <div className="grid grid-cols-3 gap-4">
            {data &&
              data?.user?.Blog?.map((row: BlogInterface, key: number) => {
                return (
                  <div key={key} className="bg-card text-card-foreground">
                    <div>
                      <Image
                        alt={row?.title}
                        src={`${config["NEXT_PUBLIC_BACKEND_BASE_URL"]}/${row?.image}`}
                        width={200}
                        height={150}
                        className="w-full object-fit h-[200px]"
                      />
                    </div>
                    <div className="flex items-center mt-3">
                      <div className="text-xs text-gray-500">
                        {data?.user?.fullname}
                      </div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-1 ml-1"></div>
                      <div className="text-xs text-gray-500">
                        {dateToHumanDate(data?.user?.createdAt)}
                      </div>
                    </div>
                    <div className="mt-1">
                      <div className="font-semibold text-1xl mb-1">
                        {row?.title}
                      </div>
                      <div className="text-sm text-gray-500 leading-normal line-clamp-3 text-justify">
                        {row?.des}
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex flex-wrap items-center gap-1">
                        {[0, 1, 2, 3, 4].map(() => {
                          return <Badge variant={"outline"}>Laravel</Badge>;
                        })}
                      </div>
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
