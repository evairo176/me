import React from "react";

import Introduction from "./components/Introduction";
import { Separator } from "@/components/ui/separator";
import CareerList from "./components/CareerList";

type Props = {};

const HomeModules = (props: Props) => {
  return (
    <>
      <Introduction />
      <Separator />
      <CareerList />
    </>
  );
};

export default HomeModules;
