import { authOption } from "@/app/api/auth/[...nextauth]/route";
import config from "@/utils/config";
import { getServerSession } from "next-auth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchData = async (session?: string) => {
  const configD = {
    headers: { Authorization: `Bearer ${session}` },
  };
  const response = await axios.get(
    `${config["BACKEND_URL"]}/users/${session}`,
    configD
  );

  return response;
};

export const usePosts = (session: string) => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchData(session),
  });
};
