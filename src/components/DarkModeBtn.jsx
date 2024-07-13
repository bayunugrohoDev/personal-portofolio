"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaLightbulb, FaMoon, FaSun } from "react-icons/fa6";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

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

  return (
    <div>
      {currentTheme === "dark" ? (
        <button
          className="flex justify-center items-center bg-black shadow-orange-500 dark:shadow-white rounded-full w-10 h-10"
          onClick={() => {
            setTheme("light");
            handlePlay();
          }}
        >
          <FaSun fontSize={22} />
        </button>
      ) : (
        <button
          className="flex justify-center items-center rounded-full w-10 h-10"
          onClick={() => {
            setTheme("dark");
            handlePlay();
          }}
        >
          <FaMoon fontSize={22} />
        </button>
      )}
    </div>
  );
};
export default DarkModeBtn;
