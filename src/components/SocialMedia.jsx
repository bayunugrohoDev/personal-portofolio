import Link from "next/link";
import React from "react";

const SocialMedia = ({ icon, link }) => {
  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="bg-lightWhite h-10 w-10 rounded-md flex justify-center items-center glass-effect dark:bg-gray-900"
    >
      {icon}
    </Link>
  );
};

export default SocialMedia;
