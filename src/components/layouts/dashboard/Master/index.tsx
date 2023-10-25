import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Toaster } from "sonner";

type Props = {
  children: React.ReactNode;
};

const Master = async ({ children }: Props) => {
  return (
    <div className="border-t">
      <div className="bg-background">
        <div className="flex flex-row">
          <Sidebar />
          <Header />
          <div className="relative col-span-3  lg:col-span-5 lg:border-l ml-0 md:ml-64 overflow-x-auto w-full">
            <div className="px-2 pt-[100px] pb-6 lg:px-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
