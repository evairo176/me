import React from "react";

import Introduction from "./components/Introduction";
import { Separator } from "@/components/ui/separator";
import CareerList from "./components/CareerList";
import { Button } from "@/components/ui/button";
import Gap from "@/components/elements/Gap";
import Projects from "./components/Projects";

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
