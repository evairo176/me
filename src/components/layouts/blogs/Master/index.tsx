import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { AllLanguage } from "../../landing-page/Master";
import Sidebar from "../Sidebar";
import CtaCard from "@/components/elements/CtaCard";
import { Separator } from "@/components/ui/separator";

type Props = {
  children: React.ReactNode;
};

const Master = async ({ children }: Props) => {
  const language = await AllLanguage();
  return (
    <>
      <Header language={language} />
      <div className="mx-auto w-full max-w-7xl px-4 flex flex-row gap-3">
        <Sidebar />
        <div className="min-h-[calc(100vh - 300px)] pt-2 w-full">
          {children}
        </div>
      </div>
      <CtaCard />
      <Separator />
      <Footer />
    </>
  );
};

export default Master;
