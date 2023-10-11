import React from "react";

type Props = {};

const Status = (props: Props) => {
  return (
    <div className="absolute inverted-border-radius z-10 left-0 py-2 pr-2 rounded-br-xl bg-white dark:bg-dark before:content-[''] before:bg-transparent before:absolute before:h-59 before:w-25 before:rounded-tl-12 before:z-0 before:shadow-0-25-0-0-white ">
      <div className="flex relative items-center gap-2 bg-white dark:bg-dark rounded-xl py-1 px-2 border border-neutral-300 dark:border-neutral-700">
        <div className="h-2 w-2 rounded-full bg-green-400" />
        <span className="text-xs text-neutral-600 dark:text-neutral-400">
          Hire Me
        </span>
      </div>
    </div>
  );
};

export default Status;
