"use client";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineLanguage } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { getAllLanguage } from "@/features/api/Language";
import { axiosAuth } from "@/lib/axios";
import { LANGUAGE_INTERFACE } from "@/types/dashboard-types";

const ToggleLanguage = ({}) => {
  const params = useParams();
  const targetLanguage = params.lang === "en" ? "id" : "en";
  const pathname = usePathname();
  const router = useRouter();
  const redirectTarget = (lang: string) => {
    params.lang = lang ? lang : "";
    if (!pathname) return "/";

    const segments = pathname.split("/");
    segments[1] = lang;

    return segments.join("/");
  };

  // Queries fetch all language
  const { data: dataLanguage } = useQuery({
    queryFn: async () => await getAllLanguage({ axiosAuth: axiosAuth }),
    queryKey: ["languages"],
  });
  // come
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full w-[30px] h-[30px]">
        <HiOutlineLanguage />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Change Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dataLanguage?.map((row: LANGUAGE_INTERFACE) => {
          return (
            <DropdownMenuItem
              onClick={() => router.push(redirectTarget(row.code))}
              key={row.id}
            >
              {row.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
    //  <Link
    //  className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full w-[30px] h-[30px]"
    //  locale={targetLanguage}
    //  href={redirectTarget()}
    // >
    //  <span>{targetLanguage === "en" ? "🇬🇧" : "🇮🇩"}</span>
    // </Link>
  );
};

export default ToggleLanguage;
