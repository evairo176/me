"use client";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { MENU_DASHBOARD, MENU_SETTING_DASHBOARD } from "@/constans/dashboard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleDashboard } from "@/redux/features/menuSlices";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();
  const { isOpenMenuDashboard } = useAppSelector((state) => state.menuReducer);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className={`hidden md:block fixed top-0 left-0 z-[1] bg-white dark:bg-slate-950  w-[75px] md:w-64 h-full`}
      >
        <div className="space-y-4 pt-[100px] pb-4">
          <div className="lg:px-3 lg:py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold hidden lg:block">
              Dashboard
            </h2>
            <div className="space-y-3">
              {MENU_DASHBOARD.map((row, key) => {
                return (
                  <Button
                    key={key}
                    onClick={() => router.push(row.url)}
                    variant={"secondary"}
                    className="w-full px-0 lg:px-4 lg:justify-start rounded-none hover:text-primary"
                  >
                    {row.icon}
                    <span className="hidden lg:block">{row.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <Separator className="block lg:hidden" />
        <div className="space-y-4 py-4">
          <div className="lg:px-3 lg:py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold hidden lg:block">
              Settings
            </h2>
            <div className="space-y-3">
              {MENU_SETTING_DASHBOARD.map((row, key) => {
                return (
                  <Button
                    key={key}
                    onClick={() =>
                      row.name === "Logout" ? signOut() : router.push(row.url)
                    }
                    variant={"secondary"}
                    className="w-full px-0 lg:px-4 lg:justify-start rounded-none hover:text-primary"
                  >
                    {row.icon}
                    <span className="hidden lg:block">{row.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed ${
          isOpenMenuDashboard ? "top-0" : "top-[-100%]"
        } left-0 w-64 h-full bg-card z-[3] p-3 rounded-md`}
      >
        <div
          className="relative flex md:hidden justify-end w-full mb-2"
          onClick={() => dispatch(toggleDashboard(false))}
        >
          <FaTimes className="w-6 h-6" />
        </div>
        <div className="space-y-4 pt-[20px] pb-4">
          <div className="lg:px-3 lg:py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold hidden lg:block">
              Dashboard
            </h2>
            <div className="space-y-3">
              {MENU_DASHBOARD.map((row, key) => {
                return (
                  <Button
                    key={key}
                    onClick={() => router.push(row.url)}
                    variant={"ghost"}
                    className="w-full px-4 justify-start rounded-none hover:text-primary"
                  >
                    {row.icon}
                    <span className="ml-2">{row.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <Separator className="block lg:hidden" />
        <div className="space-y-4 py-4">
          <div className="lg:px-3 lg:py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold hidden lg:block">
              Settings
            </h2>
            <div className="space-y-3">
              {MENU_SETTING_DASHBOARD.map((row, key) => {
                return (
                  <Button
                    key={key}
                    onClick={() =>
                      row.name === "Logout" ? signOut() : router.push(row.url)
                    }
                    variant={"ghost"}
                    className="w-full px-4 justify-start rounded-none hover:text-primary"
                  >
                    {row.icon}
                    <span className="ml-2">{row.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
