"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
// import useSound from "use-sound";
import { FaLightbulb } from "react-icons/fa6";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  // const [play, { stop }] = useSound("./sound/bubble-sound.mp3")

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handlePlay() {
    // play()
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log("theme", theme);
  return (
    <div>
      {currentTheme === "dark" ? (
        <button
          className="rounded-full bg-black flex justify-center items-center w-12 h-12 shadow-lg shadow-orange-500 dark:shadow-white"
          onClick={() => {
            setTheme("light");
            handlePlay();
          }}
        >
          <FaLightbulb fontSize={26} />
        </button>
      ) : (
        <button
          className="rounded-full flex justify-center items-center w-12 h-12 shadow-lg"
          onClick={() => {
            setTheme("dark");
            handlePlay();
          }}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
export default DarkModeBtn;
