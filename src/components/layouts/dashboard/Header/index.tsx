"use client";
import { Button } from "@/components/ui/button";
import { toggleDashboard } from "@/redux/features/menuSlices";
import { useAppDispatch } from "@/redux/hooks";
import { MenuIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  const navCreateJobPage = () => router.push("/post-a-job");

  return (
    <div className="fixed top-0 z-[2] bg-white dark:bg-slate-950   w-[100%] px-3 py-6  pb-3 border-b border-border flex flex-row items-center justify-between">
      <div className="flex w-full items-center justify-between">
        <div className="" onClick={() => dispatch(toggleDashboard(true))}>
          <MenuIcon className="w-6 h-6" />
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
