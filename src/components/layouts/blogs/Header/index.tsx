"use client";
import MenuOpen from "@/components/elements/MenuOpen";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const params = useParams();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="sticky left-0 right-0 top-0 z-[999] border-b bg-white bg-opacity-70 backdrop-blur-md dark:border-none dark:bg-black">
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
            <Link
              className="text-lg font-bold dark:text-neutral-600"
              href={`/${params.lang}`}
            >
              Explorer
            </Link>
            {/* <nav className=""> */}
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-4 text-neutral-500">
                {/* <ul className="items-center gap-4 text-neutral-500 md:flex"> */}
                {/* <li>
                  <LangSwithcer locale={locale} />
                </li> */}
                <li>
                  <Link href={`#`}>cities</Link>
                </li>
                <li>
                  <Link href={`#`}>experience</Link>
                </li>
                <li>
                  <Link href={`#`}>techonlogy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <aside
        className={`fixed inset-0 z-[1000] w-64 transform border-b bg-white bg-opacity-70 backdrop-blur-md transition-transform duration-300 ease-in-out dark:border-none dark:bg-black ${
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
              <li>{/* <LangSwithcer locale={locale} /> */}</li>
              <li>
                <Link className="text-neutral-800" href={`#`}>
                  cities
                </Link>
              </li>
              <li>
                <Link className="text-neutral-800" href={`#`}>
                  experinece
                </Link>
              </li>
              <li>
                <Link className="text-neutral-800" href={`#`}>
                  technology
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;
