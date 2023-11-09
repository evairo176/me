import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  const session = await getServerSession(authOption);

  return <div>Dashboard</div>;
};

export default Dashboard;
