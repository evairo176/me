import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
};

const Profile = ({ isOpen }: Props) => {
  return (
    <div className={clsx("flex lg:flex-col lg:items-center flex-row")}>
      <Avatar
        className={`w-[40px] h-[40px] md:w-[70px] md:h-[70px] mr-3 lg:mr-0 shadow-md border-2 z-10 border-white dark:border-neutral-800 rounded-full`}
      >
        <AvatarImage
          alt="Dicki Prasetya"
          className="lg:hover:scale-105"
          src="https://github.com/shadcn.png"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className={`flex flex-col lg:items-center`}>
        <div className="flex items-center ">
          <span className="mr-2">Dicki Prasetya</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
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
              </TooltipTrigger>
              <TooltipContent className="bg-neutral-500 border-none p-2 text-xs">
                <p className="text-white">Verified</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="text-sm text-neutral-500">@evairo176</div>
      </div>
    </div>
  );
};

export default Profile;
