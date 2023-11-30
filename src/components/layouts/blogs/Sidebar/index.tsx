"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import React from "react";
import { BiCategory } from "react-icons/bi";

type Props = {};

const Sidebar = (props: Props) => {
  const params = useParams();
  const router = useRouter();
  return (
    <div className="relative hidden md:block">
      <div className="w-52 sticky top-20">
        <ul>
          <li>
            <Button
              variant={"ghost"}
              className="gap-2 flex flex-row items-center justify-start w-full px-2"
              onClick={() =>
                router.push(`/${params?.lang}/blogs/category/technology`)
              }
            >
              <BiCategory /> Teknology
            </Button>
          </li>
          <li>
            <Button
              variant={"ghost"}
              className="gap-2 flex flex-row items-center justify-start w-full px-2"
              onClick={() =>
                router.push(`/${params?.lang}/blogs/category/experience`)
              }
            >
              <BiCategory /> Experience
            </Button>
          </li>
          <li>
            <Button
              variant={"ghost"}
              className="gap-2 flex flex-row items-center justify-start w-full px-2"
              onClick={() =>
                router.push(`/${params?.lang}/blogs/category/foods`)
              }
            >
              <BiCategory /> Foods
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
