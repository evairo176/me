"use client";
import React from "react";

import Introduction from "./components/Introduction";
import CareerList from "./components/CareerList";
// import dynamic from "next/dynamic";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { getAllBlog, getBlog } from "@/features/api/Blog";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BlogDetailSkeleton from "@/components/skeleton/BlogDetailSkeleton";

// import Blogs from "./components/Blogs";
const Blogs = dynamic(() => import("./components/Blogs"));
// const Skills = dynamic(() => import("./components/Skills"));
type Props = {
  dictionary: any;
};

const HomeModules = ({ dictionary }: Props) => {
  const params = useParams();

  return (
    <>
      <Introduction lang={params?.lang as string} dictionary={dictionary} />
      <CareerList lang={params?.lang as string} dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Blogs lang={params?.lang as string} />
      <Skills />
    </>
  );
};

export default HomeModules;
