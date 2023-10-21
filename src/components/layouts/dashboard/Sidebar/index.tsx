"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MENU_DASHBOARD } from "@/constans/home";
import Link from "next/link";
import React, { useEffect } from "react";
import MenuOpen from "@/components/elements/MenuOpen";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMenu } from "@/redux/features/menuSlices";
import { AnimatePresence, motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import AOS from "aos";
// import Profile from "@/components/elements/Profile";
import { usePathname } from "next/navigation";
import ModeToggle from "@/components/elements/ModeToggle";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import config from "@/utils/config";
import { HiOutlineLogout } from "react-icons/hi";
import { setUserRedux } from "@/redux/features/userSlices";

type Props = {};

const Sidebar = (props: Props) => {
  const { data: session } = useSession();

  const { isOpen } = useAppSelector((state) => state.menuReducer);
  const isMobile = useIsMobile();
  // const imageSize = isMobile ? 40 : 100;
  const dispatch = useAppDispatch();
  const storeData = useAppSelector((store) => store.UserReducer);

  const pathname = usePathname();

  const url = config["BACKEND_URL"];

  // useEffect(() => {
  //   if (session?.user) {
  //     fetchUser();
  //   }
  // }, [session]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // const fetchUser = async () => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${session?.user.token}` },
  //   };

  //   await axios
  //     .get(`${url}/users/${session?.user.id}`, config)
  //     .then((response) => {
  //       dispatch(setUserRedux(response.data.user));
  //     })
  //     .catch((error) => {
  //       if (error) {
  //         signOut();
  //       }
  //     });
  // };

  return (
    // <div className="sticky top-0 left-0 w-full lg:w-64 bg-white shadow-sm p-4">
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8 lg:h-full"
    >
      <div className="z-20 fixed bg-card text-card-foreground shadow lg:shadow-none  w-full lg:w-64 p-5 md:relative lg:p-0">
        <div className={`flex flex-row lg:flex-col justify-between  space-y-1`}>
          {/* <Profile isOpen={isOpen} user={storeData?.user} /> */}
          <div
            className={`flex items-center lg:hidden gap-5 mt-2 ${
              isOpen
                ? "!items-end flex-col-reverse justify-between h-[120px] pb-1"
                : "flex row"
            } `}
          >
            <ModeToggle />
            <MenuOpen
              expandMenu={isOpen}
              setExpandMenu={(e) => dispatch(toggleMenu(e))}
            />
          </div>
        </div>

        {isMobile && (
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col md:hidden space-y-1 lg:mt-4 h-screen"
              >
                <Separator className="mt-4" />
                {MENU_DASHBOARD.map((row, key) => {
                  return (
                    <Button
                      variant={pathname === row.url ? "secondary" : "ghost"}
                      className={` flex items-center justify-start gap-4 hover:lg:rounded-lg lg:hover:scale-105 lg:hover:gap-3 lg:transition-all lg:duration-300`}
                      key={key}
                      asChild
                      aria-label={row.title}
                      onClick={() => dispatch(toggleMenu(!isOpen))}
                    >
                      <Link href={row.url}>
                        {row.icon} {row.title}
                      </Link>
                    </Button>
                  );
                })}
                <Button
                  onClick={() => signOut()}
                  variant={"ghost"}
                  className="w-full px-0 lg:px-4 lg:justify-start rounded-none text-red-500  hover:text-red-500 hover:bg-red-200"
                >
                  <HiOutlineLogout className="lg:mr-2 text-lg" />
                  <span className="hidden lg:block">Logout</span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hidden md:block "
        >
          <div className="flex flex-row md:flex-col space-y-1 lg:mt-4">
            <Separator className="mt-4" />
            {MENU_DASHBOARD.map((row, key) => {
              return (
                <Button
                  variant={pathname === row.url ? "secondary" : "ghost"}
                  className="relative flex items-center justify-start gap-4 hover:lg:rounded-lg lg:hover:scale-105 lg:hover:gap-3 lg:transition-all lg:duration-300"
                  key={key}
                  onClick={() => dispatch(toggleMenu(!isOpen))}
                  aria-label={row.title}
                  asChild
                >
                  <Link href={row.url}>
                    {row.icon} {row.title}
                    {pathname === row.url && (
                      <motion.span
                        className="bg-muted rounded-md"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </Button>
              );
            })}
            <Button
              onClick={() => signOut()}
              variant={"ghost"}
              className="w-full px-0 lg:px-4 lg:justify-start rounded-none text-red-500  hover:text-red-500 hover:bg-red-200"
            >
              <HiOutlineLogout className="lg:mr-2 text-lg" />
              <span className="hidden lg:block">Logout</span>
            </Button>
          </div>
        </motion.nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
