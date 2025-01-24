"use client";

import React from "react";

import NavLink from "./NavLink";
import { usePathname } from "../../navigation";
import { menuItems } from "@/data/menu";
import { useTranslations } from "next-intl";

const NavigationMenu = ({ handleToggleClick = null }) => {
  const t = useTranslations("menu");

  const currentUrl = usePathname();
  return (
    <nav className="top-0 lg:top-6 right-0 bottom-0 left-0 absolute lg:sticky">
      <ul
        onClick={handleToggleClick}
        className="flex flex-col justify-center items-center gap-2 lg:gap-6 bg-white dark:bg-black shadow-sm p-6 border dark:border-black rounded-xl h-full"
      >
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx}
            href={item.href}
            currentUrl={currentUrl}
            title={t(`${item.id}.title`)}
            icon={item.icon}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
