"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const PortofolioCard = ({ index, img, link, title, description }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className={`max-w-full h-auto ${
        index % 2 == 0 ? "bg-lightSecondary" : "bg-lightPrimary"
      } p-4 rounded-lg dark:bg-black dark:border dark:border-bodyTexter`}
    >
      <Link
        href={link}
        target="_blank"
        className={`block  rounded-lg w-full relative overflow-hidden glass-effect ${
          index % 2 == 0 ? "aspect-video " : "aspect-square"
        }`}
      >
        <Image
          fill
          className="object-cover hover:scale-125 transition duration-500 delay-[50ms] cursor-pointer"
          src={img}
          alt=""
        />
      </Link>
      <div className="">
        <a href="#">
          <h5 className="mt-2 mb-2 font-semibold text-gray-600 text-lg dark:text-white tracking-tight">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default PortofolioCard;
