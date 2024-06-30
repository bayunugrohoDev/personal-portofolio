"use client";

import React, { useState } from "react";
import DarkModeBtn from "./DarkModeBtn";
import NavigationMenu from "./NavigationMenu";
import { FaHamburger } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import LanguageSwitcher from "./LanguagesSwitcher";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="flex flex-wrap justify-between items-center mx-auto p-4 w-full">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/assets/img/logo/logo.png"
            className="rounded-lg h-8"
            height={32}
            width={32}
            alt="Flowbite Logo"
          />
          <span className="font-semibold text-2xl dark:text-white whitespace-nowrap self-center">
            Bayunugroho.dev
          </span>
        </a>
        <button
          onClick={handleToggleClick}
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex justify-center items-center lg:hidden hover:bg-gray-100 p-2 rounded-lg w-10 h-10 text-bodyText text-sm dark:text-bodyTexter focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-bodyText dark:text-bodyTexter"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FaHamburger className="fill-gray-500 dark:fill-white" size={24}/>
        </button>
        <div
          className="lg:block lg:relative bottom-2 left-2 fixed w-full lg:w-auto"
          id="navbar-multi-level"
        >
          <div className="flex lg:flex-row flex-col lg:space-x-8 rtl:space-x-reverse mt-4 lg:mt- p-4 lg:p-0 font-medium">
            <LanguageSwitcher/>
            <DarkModeBtn />
          </div>
        </div>
      </div>
      <div
        className={`fixed z-20 top-0 right-0 bottom-0 w-full transition-all overflow-hidden ${
          open ? "left-0" : "left-[100%]"
        } lg:hidden`}
      >
          <button
          onClick={handleToggleClick}
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex top-8 right-8 z-50 absolute justify-center items-center lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg w-10 h-10 text-bodyText text-sm dark:text-bodyTexter focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-bodyText dark:text-bodyTexter dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
         <IoIosCloseCircleOutline size="32"/>
        </button>
        <NavigationMenu handleToggleClick={handleToggleClick} />
      </div>
    </header>
  );
};

export default Header;
