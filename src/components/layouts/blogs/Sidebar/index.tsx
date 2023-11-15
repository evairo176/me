import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="relative hidden md:block">
      <div className="w-52 sticky top-20">
        <ul>
          <li>
            <Button
              variant={"ghost"}
              asChild
              className="gap-2 flex flex-row items-center justify-start w-full px-2"
            >
              <Link href={`/blogs/category/technology`}>
                <BiCategory /> technology
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant={"ghost"}
              asChild
              className="gap-2 flex flex-row items-center justify-start w-full px-2"
            >
              <Link href={`/blogs/category/experience`}>
                <BiCategory /> experience
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant={"ghost"}
              asChild
              className="gap-2 flex flex-row items-center justify-start w-full px-2"
            >
              <Link href={`/blogs/category/foods`}>
                <BiCategory /> foods
              </Link>
            </Button>
          </li>
        </ul>
        <Separator />
        <div className="font-semibold px-2 text-sm mt-2">My Tags</div>
      </div>
    </div>
  );
};

export default Sidebar;
