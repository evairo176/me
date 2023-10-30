import React from "react";

import Introduction from "./components/Introduction";
import CareerList from "./components/CareerList";
import dynamic from "next/dynamic";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Blogs from "./components/Blogs";
const Blogs = dynamic(() => import("./components/Blogs"));
// const Skills = dynamic(() => import("./components/Skills"));
type Props = {};

const HomeModules = (props: Props) => {
  return (
    <>
      <Introduction />
      <CareerList />
      <Projects />
      <Skills />
      <Blogs />
    </>
  );
};

export default HomeModules;
