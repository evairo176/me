"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const ToggleLanguage = ({}) => {
  const params = useParams();
  const targetLanguage = params.lang === "en" ? "id" : "en";
  const pathname = usePathname();
  const redirectTarget = () => {
    if (!pathname) return "/";

    const segments = pathname.split("/");
    segments[1] = targetLanguage;
    return segments.join("/");
  };
  // come
  return (
    <Link
      className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full w-[30px] h-[30px]"
      locale={targetLanguage}
      href={redirectTarget()}
    >
      <span>{targetLanguage === "en" ? "🇬🇧" : "🇮🇩"}</span>
    </Link>
  );
};

export default ToggleLanguage;
