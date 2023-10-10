import { MenuType } from "@/types/home-types";
import { BiHomeCircle } from "react-icons/bi";

export const MENU: MenuType[] = [
  {
    title: "Home",
    icon: <BiHomeCircle className="w-5 h-5" />,
    url: "?menu=home",
  },
  {
    title: "Project",
    icon: <BiHomeCircle className="w-5 h-5" />,
    url: "?menu=project",
  },
  {
    title: "Blog",
    icon: <BiHomeCircle className="w-5 h-5" />,
    url: "?menu=blog",
  },
  {
    title: "Learn",
    icon: <BiHomeCircle className="w-5 h-5" />,
    url: "?menu=learn",
  },
];
