// import Link from "next/link";
import React from "react";
import { Link } from "../../navigation";

const NavLink = ({ icon, title, currentUrl, href }) => {
  return (
    <li>
      <Link
        href={href}
        className={`w-full flex flex-row text-center lg:flex-col justify-center items-center px-8 md:px-0 h-24 lg:w-24 rounded-xl gap-4 lg:gap-0 hover:bg-blue-600 hover:text-white ${
          href == currentUrl
            ? "text-blue-600 lg:bg-gradient-to-r from-blue-900 hover:from-yellow-500 to-blue-700 hover:to-yellow-300 lg:text-white"
            : "bg-white lg:bg-lightWhite dark:bg-black md:dark:bg-[#212425]"
        } glass-effect`}
      >
        {icon}
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
