"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { BsCloudSun, BsCloudMoon } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useEffect, useState } from "react";
// type Theme = "light" | "dark";

const ModeToggle = () => {
  const { setTheme } = useTheme();
  //   const { setTheme, theme } = useTheme();
  //   useEffect(() => {
  //     const localTheme = window.localStorage.getItem("theme") as Theme | null;

  //     if (localTheme) {
  //       setTheme(localTheme);
  //     } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //       setTheme("dark");
  //     }
  //   }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full w-[30px] h-[30px]"
          size={"icon"}
          variant="outline"
        >
          <BsCloudSun className="h-[13px] w-[13px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <BsCloudMoon className="absolute h-[13px] w-[13px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
            // window.localStorage.setItem("theme", "light");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");
            // window.localStorage.setItem("theme", "dark");
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system");
            window.localStorage.setItem("theme", "system");
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
