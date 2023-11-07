"use client";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { MENU_DASHBOARD, MENU_SETTING_DASHBOARD } from "@/constans/dashboard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleDashboard } from "@/redux/features/menuSlices";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const { isOpenMenuDashboard } = useAppSelector((state) => state.menuReducer);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${
          isOpenMenuDashboard ? "w-12" : "lg:w-64 "
        }  h-full border-r fixed top-0 left-0 overflow-hidden hidden md:block transition-all duration-300`}
      >
        <div
          className={`space-y-2 mt-20 ${
            isOpenMenuDashboard ? "py-0 px-0" : "py-[10px] px-[25px]"
          }`}
        >
          {isOpenMenuDashboard ? (
            ""
          ) : (
            <div className="text-sm font-light">Main Navigation</div>
          )}

          {isOpenMenuDashboard ? (
            <div className="w-full transition-all duration-300">
              {MENU_DASHBOARD.map((row, key) => {
                return (
                  <Button
                    key={key}
                    variant={pathname === row.url ? "secondary" : "ghost"}
                    className="w-full flex flex-row justify-center"
                    asChild
                  >
                    <Link href={row.url}>{row.icon}</Link>
                  </Button>
                );
              })}
            </div>
          ) : (
            <div className="w-full transition-all duration-300">
              {MENU_DASHBOARD.map((row, key) => {
                return (
                  <Button
                    key={key}
                    variant={pathname === row.url ? "secondary" : "ghost"}
                    className="w-full flex flex-row justify-start gap-2"
                    asChild
                  >
                    <Link href={row.url}>
                      {row.icon} {row.name}
                    </Link>
                  </Button>
                );
              })}
            </div>
          )}

          {isOpenMenuDashboard ? (
            ""
          ) : (
            <div className="text-sm font-light">Settings</div>
          )}

          {isOpenMenuDashboard ? (
            <div className="w-full transition-all duration-300">
              {MENU_SETTING_DASHBOARD.map((row, key) => {
                if (row.name === "Logout") {
                  return (
                    <Button
                      key={key}
                      variant={pathname === row.url ? "secondary" : "ghost"}
                      className="w-full flex flex-row justify-start gap-2"
                      onClick={() => signOut()}
                    >
                      {row.icon} {row.name}
                    </Button>
                  );
                }
                return (
                  <Button
                    key={key}
                    variant={pathname === row.url ? "secondary" : "ghost"}
                    className="w-full flex flex-row justify-center"
                    asChild
                  >
                    <Link href={row.url}>{row.icon}</Link>
                  </Button>
                );
              })}
            </div>
          ) : (
            <div className="w-full transition-all duration-300">
              {MENU_SETTING_DASHBOARD.map((row, key) => {
                if (row.name === "Logout") {
                  return (
                    <Button
                      key={key}
                      variant={pathname === row.url ? "secondary" : "ghost"}
                      className="w-full flex flex-row justify-start gap-2"
                      onClick={() => signOut()}
                    >
                      {row.icon} {row.name}
                    </Button>
                  );
                }
                return (
                  <Button
                    key={key}
                    variant={pathname === row.url ? "secondary" : "ghost"}
                    className="w-full flex flex-row justify-start gap-2"
                    asChild
                  >
                    <Link href={row.url}>
                      {row.icon} {row.name}
                    </Link>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* // mobile sidebar */}
      <div
        className={`w-64 h-full border-r fixed ${
          isOpenMenuDashboard ? "top-0" : "-top-[100%]"
        } left-0 z-10 bg-card overflow-hidden block md:hidden transition-all duration-300`}
      >
        <div
          className="w-full pt-5 px-4 flex flex-row justify-end"
          onClick={() => dispatch(toggleDashboard(!isOpenMenuDashboard))}
        >
          <FaTimes />
        </div>
        <div className={`space-y-2 mt-7 py-[10px] px-[25px]`}>
          <div className="text-sm font-light">Main Navigation</div>

          <div className="w-full transition-all duration-300">
            {MENU_DASHBOARD.map((row, key) => {
              return (
                <Button
                  key={key}
                  variant={pathname === row.url ? "secondary" : "ghost"}
                  className="w-full flex flex-row justify-start gap-2"
                  asChild
                >
                  <Link href={row.url}>
                    {row.icon} {row.name}
                  </Link>
                </Button>
              );
            })}
          </div>
          <div className="text-sm font-light">Settings</div>

          <div className="w-full transition-all duration-300">
            {MENU_SETTING_DASHBOARD.map((row, key) => {
              if (row.name === "Logout") {
                return (
                  <Button
                    key={key}
                    variant={pathname === row.url ? "secondary" : "ghost"}
                    className="w-full flex flex-row justify-start gap-2"
                    onClick={() => signOut()}
                  >
                    {row.icon} {row.name}
                  </Button>
                );
              }
              return (
                <Button
                  key={key}
                  variant={pathname === row.url ? "secondary" : "ghost"}
                  className="w-full flex flex-row justify-start gap-2"
                  asChild
                >
                  <Link href={row.url}>
                    {row.icon} {row.name}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
