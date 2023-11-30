"use client";
import MenuOpen from "@/components/elements/MenuOpen";
import ModeToggle from "@/components/elements/ModeToggle";
import ToggleLanguage from "@/components/elements/ToggleLanguage";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

type Props = { language: any };

const Header = ({ language }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const params = useParams();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="sticky left-0 right-0 top-0 z-[10] border-b bg-white bg-opacity-70 backdrop-blur-md dark:border-none dark:bg-black">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex items-center justify-between py-5">
            <Button
              aria-label="Mobile Menu Button"
              variant={"ghost"}
              id="mobileMenuButton"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <MenuOpen
                expandMenu={isMobileMenuOpen}
                setExpandMenu={toggleMobileMenu}
              />
            </Button>
            <Link className="text-lg font-bold" href={`/${params.lang}`}>
              Explorer
            </Link>

            {/* <nav className=""> */}
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-4 ">
                {/* <ul className="items-center gap-4 text-neutral-500 md:flex"> */}
                {/* <li>
                  <LangSwithcer locale={locale} />
                </li> */}
                <li>
                  <ToggleLanguage language={language} />
                </li>
                <li>
                  <ModeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <aside
        className={`fixed inset-0 z-[10] w-64 transform border-b bg-white bg-opacity-70 backdrop-blur-md transition-transform duration-300 ease-in-out dark:border-none dark:bg-black ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <div className=" h-16  px-4 py-4 text-right">
          <Button
            variant={"ghost"}
            aria-label="Mobile Menu Button A"
            onClick={toggleMobileMenu}
          >
            <MenuOpen
              expandMenu={isMobileMenuOpen}
              setExpandMenu={toggleMobileMenu}
            />
          </Button>
        </div>
        <nav className="px-4 py-2" onClick={toggleMobileMenu}>
          <div className="mx-auto w-full max-w-7xl px-4">
            <ul className="space-y-3">
              <li>
                <Link href={`/blogs/category/technology`}>Technology</Link>
              </li>
              <li>
                <Link href={`/blogs/category/experience`}>Experience</Link>
              </li>
              <li>
                <Link href={`/blogs/category/foods`}>Foods</Link>
              </li>
            </ul>
            <Separator className="mb-2 mt-2" />
            <div className="flex items-center gap-2">
              <ToggleLanguage language={language} />
              <ModeToggle />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;
