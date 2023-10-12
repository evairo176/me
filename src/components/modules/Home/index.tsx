import React from "react";

import Introduction from "./components/Introduction";
import { Separator } from "@/components/ui/separator";
import CareerList from "./components/CareerList";
import { Button } from "@/components/ui/button";
import Gap from "@/components/elements/Gap";

type Props = {};

const HomeModules = (props: Props) => {
  return (
    <>
      <Introduction />
      <CareerList />
    </>
  );
};

export default HomeModules;
