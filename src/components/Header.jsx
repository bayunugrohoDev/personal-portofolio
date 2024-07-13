"use client";

import React, { useState } from "react";
import DarkModeBtn from "./DarkModeBtn";
import NavigationMenu from "./NavigationMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import LanguageSwitcher from "./LanguagesSwitcher";
import { useTranslations } from "next-intl";
const Header = () => {
  const t = useTranslations('header');

  const [open, setOpen] = useState(false);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="flex flex-wrap justify-between items-center mx-auto p-4 w-full">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse w-1/2">
          <Image
            src="/assets/img/logo/logo.png"
            className="rounded-lg h-8"
            height={32}
            width={32}
            alt="Flowbite Logo"
          />
          <span className="md:block font-semibold text-lg md:text-2xl dark:text-white truncate self-center">
          {t('title')}
          </span>
        </a>
        <div className="flex justify-end items-center gap-1 md:gap-4 w-1/2">
      
          <LanguageSwitcher />
          <DarkModeBtn />

          <button
            onClick={handleToggleClick}
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex justify-center items-center lg:hidden hover:bg-gray-100 p-2 rounded-lg w-10 h-10 text-bodyText text-sm dark:text-bodyTexter focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-bodyText dark:text-bodyTexter"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu className="dark:fill-white" size={24} />
          </button>
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
          <IoIosCloseCircleOutline size="32" />
        </button>
        <NavigationMenu handleToggleClick={handleToggleClick} />
      </div>
    </header>
  );
};

export default Header;
