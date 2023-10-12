import React from "react";

import Introduction from "./components/Introduction";
import { Separator } from "@/components/ui/separator";
import CareerList from "./components/CareerList";
import { Button } from "@/components/ui/button";

type Props = {};

const HomeModules = (props: Props) => {
  return (
    <>
      <Introduction />
      <Separator />
      <CareerList />
      <Separator />
      <Button>CHek</Button>
    </>
  );
};

export default HomeModules;
