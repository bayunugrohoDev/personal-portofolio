// components/LanguageSwitcher.js
"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '/assets/img/flags/united-kingdom.png' },
  { code: 'ar', name: 'Arabic', flag: '/assets/img/flags/saudi-arabia.png' },
  { code: 'id', name: 'Indonesian', flag: '/assets/img/flags/indonesia.png' },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages.find(lang => lang.code === router.locale));

  const changeLanguage = (lang) => {
    setIsOpen(false);
    setSelectedLang(lang);
    router.push(router.pathname, router.asPath, { locale: lang.code });
  };

  return (
    <div className="inline-block relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center dark:border-gray-600 dark:bg-gray-700 p-2 border rounded dark:text-white"
      >
        <FaGlobe className="" size={24} />
        {/* <Image src={selectedLang.flag} alt={selectedLang.name} height={16} width={16} className="mr-2 object-contain" />
        {selectedLang.name} */}
      </button>
      {isOpen && (
        <ul className="z-10 absolute border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-lg mt-2 border rounded w-max">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className="flex items-center hover:bg-gray-200 dark:hover:bg-gray-600 p-2 w-full cursor-pointer"
            >
              <Image src={lang.flag} alt={lang.name} height={16} width={16} className="mr-2 object-contain" />
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
