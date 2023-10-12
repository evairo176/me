"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MENU } from "@/constans/home";
import Link from "next/link";
import React, { useEffect } from "react";
import MenuOpen from "@/components/elements/MenuOpen";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMenu } from "@/redux/features/menuSlices";
import { AnimatePresence, motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import AOS from "aos";
import Profile from "@/components/elements/Profile";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Sidebar = (props: Props) => {
  const { isOpen } = useAppSelector((state) => state.menuReducer);
  const isMobile = useIsMobile();
  // const imageSize = isMobile ? 40 : 100;
  const dispatch = useAppDispatch();
  const pathname = usePathname();

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

  return (
    // <div className="sticky top-0 left-0 w-full lg:w-64 bg-white shadow-sm p-4">
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8 lg:h-full">
      <div className="z-20 fixed rounded-xl border bg-card text-card-foreground shadow  w-full lg:w-64 p-5 md:relative lg:p-0">
        <div
          className={`flex flex-row lg:flex-col items-center justify-between  space-y-1`}
        >
          <Profile isOpen={isOpen} />
          <MenuOpen
            expandMenu={isOpen}
            setExpandMenu={(e) => dispatch(toggleMenu(e))}
          />
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
                {MENU.map((row, key) => {
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
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <nav className="hidden md:block ">
          <div className="flex flex-row md:flex-col space-y-1 lg:mt-4">
            <Separator className="mt-4" />
            {MENU.map((row, key) => {
              return (
                <Button
                  variant={pathname === row.url ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-4 hover:lg:rounded-lg lg:hover:scale-105 lg:hover:gap-3 lg:transition-all lg:duration-300"
                  key={key}
                  onClick={() => dispatch(toggleMenu(!isOpen))}
                  aria-label={row.title}
                  asChild
                >
                  <Link href={row.url}>
                    {row.icon} {row.title}
                  </Link>
                </Button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
