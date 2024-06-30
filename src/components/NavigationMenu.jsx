"use client";

import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBlogger, FaCode, FaNewspaper, FaRegUser } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import NavLink from "./NavLink";

const NavigationMenu = ({ handleToggleClick = null }) => {
  const currentUrl = usePathname();
  return (
    <nav className="top-0 lg:top-6 right-0 bottom-0 left-0 absolute lg:sticky">
      <ul
        onClick={handleToggleClick}
        className="flex flex-col justify-center items-center gap-2 lg:gap-6 bg-white dark:bg-black shadow-sm p-6 border dark:border-black rounded-xl"
      >
        <NavLink
          href={"/"}
          currentUrl={currentUrl}
          title={"About"}
          icon={<FaRegUser size={24} />}
        />
        <NavLink
          href={"/blog"}
          currentUrl={currentUrl}
          title={"Blog"}
          icon={<FaBlogger size={24} />}
        />
        <NavLink
          href={"/resume"}
          currentUrl={currentUrl}
          title={"Resume"}
          icon={<FaNewspaper size={24} />}
        />
        <NavLink
          href={"/portofolio"}
          currentUrl={currentUrl}
          title={"Works"}
          icon={<MdWork size={24} />}
        />
        
        <NavLink
          href={"/contact"}
          currentUrl={currentUrl}
          title={"Contact"}
          icon={<RiContactsBook2Fill size={24} />}
        />
      </ul>
    </nav>
  );
};

export default NavigationMenu;
