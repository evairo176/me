import { DASHBOARD_MENU_INTERFACE } from "@/types/dashboard-types";
import { signOut, useSession } from "next-auth/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaLanguageSolid } from "react-icons/lia";

export const MENU_DASHBOARD_ADMIN: DASHBOARD_MENU_INTERFACE[] = [
  {
    name: "Dashboard",
    url: "/admin/dashboard",
    icon: <AiOutlineHome />,
  },
  {
    name: "Language",
    url: "/admin/language",
    icon: <LiaLanguageSolid />,
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
];

export const MENU_DASHBOARD_USER: DASHBOARD_MENU_INTERFACE[] = [
  {
    name: "Dashboard",
    url: "/user/dashboard",
    icon: <AiOutlineHome />,
  },
  {
    name: "Blogs",
    url: "/user/blog",
    icon: <HiOutlineBuildingOffice2 />,
  },
];

export const MENU_SETTING_DASHBOARD: DASHBOARD_MENU_INTERFACE[] = [
  {
    name: "Logout",
    url: "",
    icon: <HiOutlineLogout />,
  },
];
