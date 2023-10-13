import React from "react";

import Introduction from "./components/Introduction";
import CareerList from "./components/CareerList";
import dynamic from "next/dynamic";
const Projects = dynamic(() => import("./components/Projects"));
const Skills = dynamic(() => import("./components/Skills"));
type Props = {};

const HomeModules = (props: Props) => {
  return (
    <>
      <Introduction />
      <CareerList />
      <Projects />
      <Skills />
    </>
  );
};

export default HomeModules;
