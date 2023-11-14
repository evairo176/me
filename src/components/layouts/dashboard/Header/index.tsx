"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toggleDashboard } from "@/redux/features/menuSlices";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TbSettingsCog } from "react-icons/tb";
import React, { FC } from "react";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { isOpenMenuDashboard } = useAppSelector((state) => state.menuReducer);
  const dispatch = useAppDispatch();

  return (
    <div className="fixed top-0 z-[2] bg-card  w-full px-3 py-3 border-b border-border flex flex-row items-center justify-between">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-row">
          <div
            className={`${
              isOpenMenuDashboard ? "w-12" : "w-64"
            } text-center hidden md:block`}
          >
            {isOpenMenuDashboard ? "DB" : "Dashboard Blogs"}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(toggleDashboard(!isOpenMenuDashboard))}
          >
            <CiMenuFries />
          </div>
        </div>
        <div className="flex flex-row  items-center">
          <div className="mr-2">
            <Image
              alt={session?.user?.name as string | "profile"}
              width={30}
              height={30}
              className="rounded-full w-[25px] h-[25px]"
              src={session?.user?.image as string}
            />
          </div>
          <div className="text-sm font-semibold mr-3">
            {session?.user?.name}
          </div>
          <div>
            <Button size={"sm"}>
              <TbSettingsCog className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
