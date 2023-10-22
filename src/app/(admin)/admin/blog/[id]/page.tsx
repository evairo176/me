"use client";
import BlogBody from "@/components/elements/BlogBody";
import config from "@/utils/config";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { useQuery } from "react-query";

// A function to fetch data from the API
const fetchData = async (session: any, id?: string) => {
  const configD = {
    headers: { Authorization: `Bearer ${session.user.token}` },
  };
  try {
    const response = await axios.get(
      `${config["BACKEND_URL"]}/blogs/${id}`,
      configD
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

type Props = {};

const DetailBlog = () => {
  const { id } = useParams();

  //   const queryClient = useQueryClient();
  const { data: session } = useSession();

  console.log({ session });
  // Queries
  const { data, isLoading, isError, error } = useQuery(
    "blogs",
    () => fetchData(session ? session : "", id as string),
    {
      enabled: !!session, // Enable the query only if there is an authenticated session);
    }
  );

  console.log({ data, isLoading, isError });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fething data...</p>;
  }

  return (
    <div>
      <div className="font-semibold text-3xl">{data?.blog?.title}</div>
      <div className="font-semibold text-neutral-500 text-base mb-10">
        {data?.blog?.des}
      </div>
      <BlogBody body={data?.blog?.content} />
    </div>
  );
};

export default DetailBlog;
