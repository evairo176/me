import React, { cache } from "react";

import Introduction from "./components/Introduction";
import CareerList from "./components/CareerList";
// import dynamic from "next/dynamic";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { getBlog } from "@/features/api/Blog";

import Blogs from "./components/Blogs";
// const Blogs = dynamic(() => import("./components/Blogs"));
// const Skills = dynamic(() => import("./components/Skills"));
type Props = {
  lang: string;
  dictionary: any;
};

const getAllBlogData = cache(async (lang: string) => {
  try {
    const allBlog = await getBlog({
      id: "clnye4mzg0000nls08cyb4q36",
      lang: lang,
    });

    return allBlog;
  } catch (error) {
    console.log(error);
  }
});

export const revalidate = 1800; // revalidate at every 10 seconds

const HomeModules = async ({ lang, dictionary }: Props) => {
  const allBlog = await getAllBlogData(lang);

  return (
    <>
      <Introduction lang={lang} dictionary={dictionary} />
      <CareerList lang={lang} dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Blogs lang={lang} allBlog={allBlog} />
      <Skills />
    </>
  );
};

export default HomeModules;
