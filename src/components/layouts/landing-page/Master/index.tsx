import React, { cache } from "react";
import ClientMaster from "./ClientMaster";
import { getAllLanguage } from "@/features/api/Language";

type Props = {
  children: React.ReactNode;
};

export const AllLanguage = cache(async () => {
  try {
    const allBlog = await getAllLanguage();

    return allBlog;
  } catch (error) {
    console.log(error);
  }
});

export const revalidate = 10; // revalidate at every 10 seconds

const Master = async ({ children }: Props) => {
  const language = await AllLanguage();

  return <ClientMaster language={language}>{children}</ClientMaster>;
};

export default Master;
