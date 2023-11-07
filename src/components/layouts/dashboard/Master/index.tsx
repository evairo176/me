"use client";
import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Toaster } from "sonner";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  children: React.ReactNode;
};

const Master = ({ children }: Props) => {
  const { isOpenMenuDashboard } = useAppSelector((state) => state.menuReducer);
  return (
    <>
      <Header />
      <Sidebar />
      <div
        className={`relative col-span-3  lg:col-span-5 lg:border-l ${
          isOpenMenuDashboard ? "ml-0 md:ml-16" : "ml-0 md:ml-64"
        }   overflow-x-auto h-screen transition-all duration-300`}
      >
        <div className="px-2 pt-[100px] pb-6 md:px-4 w-full">{children}</div>
      </div>
    </>
  );
};

export default Master;
