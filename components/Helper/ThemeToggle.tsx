"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  const {theme, setTheme, systemTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-300 transition cursor-pointer"
    >
        {currentTheme === "dark" ? (
      <BiSun className="text-yellow-400 size-6" />
        ) : (
            <BiMoon className="text-gray-600 size-6" />
        )}

    </button>
  );
};

export default ThemeToggle;
