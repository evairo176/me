import { DASHBOARD_MENU_INTERFACE } from "@/types/dashboard-types";
import { signOut } from "next-auth/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export const MENU_DASHBOARD: DASHBOARD_MENU_INTERFACE[] = [
  {
    name: "Dashboard",
    url: "/admin/dashboard",
    icon: <AiOutlineHome />,
  },
  {
    name: "Blogs",
    url: "/admin/blog",
    icon: <HiOutlineBuildingOffice2 />,
  },
  {
    name: "Role",
    url: "/admin/role",
    icon: <FaUserShield />,
  },
  {
    name: "Menu",
    url: "/admin/menu",
    icon: <BsFillMenuButtonFill />,
  },
];

export const MENU_SETTING_DASHBOARD: DASHBOARD_MENU_INTERFACE[] = [
  {
    name: "Logout",
    url: "",
    icon: <HiOutlineLogout />,
  },
];
