import { DASHBOARD_MENU_INTERFACE } from "@/types/dashboard-types";
import { AiOutlineHome } from "react-icons/ai";

export const DASHBOARD_MENU: DASHBOARD_MENU_INTERFACE[] = [
  {
    name: "Dashboard",
    url: "/admin/dashboard",
    icon: <AiOutlineHome className="lg:mr-2  text-lg" />,
  },
];
