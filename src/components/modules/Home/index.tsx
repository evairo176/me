import React from "react";

import Introduction from "./components/Introduction";
import CareerList from "./components/CareerList";
import dynamic from "next/dynamic";
const Projects = dynamic(() => import("./components/Projects"));
type Props = {};

const HomeModules = (props: Props) => {
  return (
    <>
      <Introduction />
      <CareerList />
      <Projects />
    </>
  );
};

export default HomeModules;
