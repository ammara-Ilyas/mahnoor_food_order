"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../miniWidgets/Button";
import { useRouter } from "next/navigation";
import Logo from "./components/Logo";
import { useMenu } from "@/contextApi/MenuContext";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isBook, setIsBook] = useState(false);
  // const { isBook, setIsBook } = useMenu();
  const router = useRouter();
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(true);
  };
  const links = [
    {
      nav: "home",
      link: "/",
    },
    {
      nav: "venues",
      link: "/events",
    },
    {
      nav: "about",
      link: "/about",
    },
    {
      nav: "menu",
      link: "/menu",
    },
    {
      nav: "contact",
      link: "/contact",
    },
  ];
  // console.log("Pathname in navbar", pathname);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4 font-sans text-white ${
          isScrolled ? "bg-gray-900 shadow-lg" : `bg-opacity-20`
        }`}
      >
        <div className="flex justify-between items-center flex-row px-10">
          {" "}
          {/* Logo */}
          <Logo />
          {/* Links */}
          <div className="hidden md:flex items-center justify-center gap-2">
            <>
              {links.map((page, i) => (
                <Link
                  key={i}
                  href={page.link}
                  className={`relative  mx-3 py-[3px] border-b-2 border-transparent hover:border-transparent group p-[2px] text-sm font-semibold cursor-pointer uppercase 
                  `}
                >
                  {page.nav}
                  <span
                    className={`  ${pathname === page.link ? "w-full" : "w-0"}
                  absolute bottom-0 left-0  w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              ))}
              <Link href="/order">
                <Button text="Booking" />
              </Link>
            </>
          </div>
          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden">
            <AiOutlineMenu size={20} className="text-white" />
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div
          className={`${
            nav
              ? "fixed md:hidden left-0 top-0 w-[100%] sm:w-[80%] h-full ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          } text-white bg-black z-50 bg-opacity-95 pt-8`}
        >
          {/* Mobile Logo */}
          {/* Logo */}
          <div className=" flex items-center justify-between px-10  bg-black">
            <div>
              <Logo />
            </div>
            <AiOutlineClose
              size={20}
              className="text-white"
              onClick={() => setNav(false)}
            />
          </div>
          {/* Mobile Navigation Items */}
          <div className="flex flex-col gap-2 mt-9">
            {" "}
            <>
              {links.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="p-4 border-b pl-16 rounded-xl text-white hover:bg-orange-600 duration-300 hover:text-white cursor-pointer border-gray-600  font-semibold capitalize"
                  onClick={() => setNav(false)}
                >
                  {item.nav}
                </Link>
              ))}
              <Link className=" pl-16 pt-10" href="/order">
                <Button text="Booking" />
              </Link>{" "}
            </>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
