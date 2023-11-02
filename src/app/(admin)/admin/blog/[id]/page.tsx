"use client";
import BlogBody from "@/components/elements/BlogBody";

import { useParams } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import useAxiosAuth from "@/hooks/useAxiosAuth";

type Props = {};

const DetailBlog = () => {
  const { id } = useParams();
  const axiosAuth = useAxiosAuth();
  // Queries fetch all blog
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const response = await axiosAuth.get(`/blogs/${id}`);
      return response.data;
    },
    queryKey: ["blogsDetail"],
    enabled: !!id,
  });

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
      <div className="w-full">
        <Image
          className="w-full h-100 object-contain"
          src={data?.blog?.image}
          alt={data?.blog?.title}
          width={150}
          height={150}
        />
      </div>
      <BlogBody body={data?.blog?.content} />
    </div>
  );
};

export default DetailBlog;
