import { authOptions } from "@/helper";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    lang: string;
  };
};

const UserPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  return <div>Role: {session?.user?.Role?.name}</div>;
};

export default UserPage;
