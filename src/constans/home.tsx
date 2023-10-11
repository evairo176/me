import { MenuType } from "@/types/home-types";
import { BiHomeCircle } from "react-icons/bi";
import { CiViewTimeline } from "react-icons/ci";
import { PiArticleLight } from "react-icons/pi";
import { GiStumpRegrowth } from "react-icons/gi";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineDashboard,
} from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineContacts } from "react-icons/md";

export const MENU: MenuType[] = [
  {
    title: "Home",
    icon: <BiHomeCircle className="w-5 h-5" />,
    url: "/",
  },
  {
    title: "Project",
    icon: <AiOutlineFundProjectionScreen className="w-5 h-5" />,
    url: "projects",
  },
  {
    title: "Blog",
    icon: <PiArticleLight className="w-5 h-5" />,
    url: "blog",
  },
  {
    title: "Learn",
    icon: <GiStumpRegrowth className="w-5 h-5" />,
    url: "learn",
  },
  {
    title: "Roadmap",
    icon: <CiViewTimeline className="w-5 h-5" />,
    url: "roadmap",
  },
  {
    title: "Task Board",
    icon: <GoTasklist className="w-5 h-5" />,
    url: "task-board",
  },
  {
    title: "About",
    icon: <SiAboutdotme className="w-5 h-5" />,
    url: "about",
  },
  {
    title: "Contact",
    icon: <MdOutlineContacts className="w-5 h-5" />,
    url: "contact",
  },
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard className="w-5 h-5" />,
    url: "dashboard",
  },
];
