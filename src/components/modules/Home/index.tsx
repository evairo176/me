import React from "react";

import Introduction from "./components/Introduction";
import CareerList from "./components/CareerList";
import dynamic from "next/dynamic";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Blogs from "./components/Blogs";
const Blogs = dynamic(() => import("./components/Blogs"));
// const Skills = dynamic(() => import("./components/Skills"));
type Props = {
  lang: string;
  dictionary: any;
};

const HomeModules = ({ lang, dictionary }: Props) => {
  return (
    <>
      <Introduction lang={lang} dictionary={dictionary} />
      <CareerList lang={lang} dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Skills />
      <Blogs lang={lang} />
    </>
  );
};

export default HomeModules;
