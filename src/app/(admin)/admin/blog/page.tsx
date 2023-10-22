"use client";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <div className="grid grid-cols-2 gap-4">
            {data &&
              data?.user?.Blog?.map((row: BlogInterface, key: number) => {
                return (
                  <div
                    key={key}
                    className=" rounded-md border bg-card text-card-foreground"
                  >
                    <div>
                      <Image
                        alt={row?.title}
                        src={`${config["NEXT_PUBLIC_BACKEND_BASE_URL"]}/${row?.image}`}
                        width={200}
                        height={150}
                        className="w-full object-fit h-[170px]"
                      />
                    </div>
                    <div className="p-2 lg:p-3">
                      <div className="font-semibold text-2xl">{row?.title}</div>
                      <div className="text-sm text-gray-500">{row?.des}</div>
                      <div className="text-sm text-gray-500">
                        {data?.user?.fullname}
                      </div>
                      <div className="mt-2">
                        <Button variant="secondary">
                          <Link href={`/admin/blog/${row?.id}`}>Read More</Link>
                        </Button>
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
