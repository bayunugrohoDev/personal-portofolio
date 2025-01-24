"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const PortofolioCard = ({ img, link, title, description, aspectClass, bgClass }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className={`max-w-full h-auto ${bgClass} p-4 rounded-lg dark:bg-black dark:border dark:border-bodyTexter`} // Apply dynamic background class
    >
      <Link
        href={link}
        target="_blank"
        className={`block rounded-lg w-full relative overflow-hidden glass-effect ${aspectClass}`} // Add dynamic aspect class
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
