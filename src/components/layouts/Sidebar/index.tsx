import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MENU } from "@/constans/home";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MenuOpen from "@/components/elements/MenuOpen";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    // <div className="sticky top-0 left-0 w-full lg:w-64 bg-white shadow-sm p-4">
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
      <div className="z-20 fixed shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-white dark:bg-dark lg:!bg-transparent w-full lg:w-64 p-5 lg:relative lg:p-0">
        <div className="flex flex-row lg:flex-col items-center justify-between  space-y-1 mb-4">
          <div className="flex flex-row lg:flex-col lg:items-center ">
            <Avatar className="w-[70px] h-[70px] mr-3 lg:mr-0">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col lg:items-center">
              <div className="flex items-center">
                <span className="mr-5">Dicki Prasetya</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="text-blue-400"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                </svg>
              </div>
              <div className="text-sm text-neutral-400">@evairo176</div>
            </div>
          </div>
          <MenuOpen />
        </div>
        <Separator className="md:hidden" />
        <div className="flex flex-col md:hidden space-y-1 lg:mt-4">
          {MENU.map((row, key) => {
            return (
              <Button
                variant={"ghost"}
                className="flex items-center justify-start gap-4 hover:lg:rounded-lg lg:hover:scale-105 lg:hover:gap-3 lg:transition-all lg:duration-300"
                key={key}
                asChild
              >
                <Link href={row.url}>
                  {row.icon} {row.title}
                </Link>
              </Button>
            );
          })}
        </div>
        <Separator />
        <nav className="hidden md:block">
          <div className="flex flex-row md:flex-col space-y-1 lg:mt-4">
            {MENU.map((row, key) => {
              return (
                <Button
                  variant={"ghost"}
                  className="flex items-center justify-start gap-4 hover:lg:rounded-lg lg:hover:scale-105 lg:hover:gap-3 lg:transition-all lg:duration-300"
                  key={key}
                  asChild
                >
                  <Link href={row.url}>
                    {row.icon} {row.title}
                  </Link>
                </Button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
