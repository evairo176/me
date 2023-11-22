import { authOptions } from "@/helper";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  const session = await getServerSession(authOptions);

  return <div>Dashboard</div>;
};

export default Dashboard;
