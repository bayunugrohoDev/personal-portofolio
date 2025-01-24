import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

const DarkModeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensuring the theme is available before rendering
  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <button
          className="flex justify-center items-center bg-black shadow-orange-500 dark:shadow-white rounded-full w-10 h-10"
          onClick={() => {
            setTheme("light");
          }}
        >
          <FaSun fontSize={22} />
        </button>
      ) : (
        <button
          className="flex justify-center items-center rounded-full w-10 h-10"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <FaMoon fontSize={22} />
        </button>
      )}
    </>
  );
};

export default DarkModeBtn;
