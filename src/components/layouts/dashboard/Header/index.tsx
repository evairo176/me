"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon, PlusIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const navCreateJobPage = () => router.push("/post-a-job");

  return (
    <div className="fixed top-0 z-[2] bg-white dark:bg-slate-950   w-[100%] px-3 py-6  pb-3 border-b border-border flex flex-row items-center justify-between">
      <div className="flex gap-2 items-center justify-start">
        <div className="block md:hidden p-3">
          <MenuIcon className="w-7 h-7" />
        </div>
        <div>
          <div>Me</div>
          <div className="font-semibold">{session?.user?.fullname}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
