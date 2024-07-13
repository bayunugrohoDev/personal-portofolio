"use client"

import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const tFooter = useTranslations("footer");

  return (
    <footer className="p-2 text-center">
      {tFooter("title")}
    </footer>
  );
};

export default Footer;
