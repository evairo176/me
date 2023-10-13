import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

type Props = {};

function notFound({}: Props) {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">
            Opps, sorry page not found {":("}
          </h4>
          <p className="text-sm text-muted-foreground">please try again</p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <Button variant={"ghost"} asChild>
            <Link href={"/"}>Home</Link>
          </Button>
          <Separator orientation="vertical" />
          <div>Docs</div>
          {/* <Separator orientation="vertical" />
          <div>Source</div> */}
        </div>
      </div>
    </div>
  );
}

export default notFound;
