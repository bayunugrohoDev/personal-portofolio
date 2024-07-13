// components/LanguageSwitcher.js
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { Link, usePathname } from "../../navigation";
import { useLocale } from "next-intl";

const languages = [
  { code: "en", name: "English", flag: "/assets/img/flags/united-kingdom.png" },
  { code: "ar", name: "Arabic", flag: "/assets/img/flags/saudi-arabia.png" },
  { code: "id", name: "Indonesian", flag: "/assets/img/flags/indonesia.png" },
];

const LanguageSwitcher = () => {
  const currentLocal = useLocale();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const getSelectedLanguage = () => {
    const result = languages.find((item) => item.code === currentLocal);
    return result;
  };
  return (
    <div className="inline-block relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 md:p-2 rounded dark:text-white"
      >
        <Image
          src={getSelectedLanguage().flag}
          alt={getSelectedLanguage().name}
          height={20}
          width={20}
          className="mr-2 object-contain"
        />
        <span className="md:block hidden">
          {getSelectedLanguage().name}
        </span>
      </button>
      {isOpen && (
        <ul className="z-10 absolute border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-lg mt-2 border rounded w-max">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={pathname}
              locale={lang.code}
              // onClick={() => changeLanguage(lang)}
              className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 w-full cursor-pointer"
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                height={16}
                width={16}
                className="object-contain"
              />
              {lang.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
