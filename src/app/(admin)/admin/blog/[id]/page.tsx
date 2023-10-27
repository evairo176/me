"use client";
import BlogBody from "@/components/elements/BlogBody";
import config from "@/utils/config";
import axios from "axios";
import { useParams } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const DetailBlog = () => {
  const { id } = useParams();
  // Queries fetch all blog
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const response = await axios.get(`${config["BACKEND_URL"]}/blogs/${id}`);
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
      <BlogBody body={data?.blog?.content} />
    </div>
  );
};

export default DetailBlog;
