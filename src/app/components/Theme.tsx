"use client";

import React from "react";
import { useTheme } from "next-themes";
import classNames from "classnames";

const Theme: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="fixed top-1/2 right-0 z-50">
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className={classNames(
          "w-auto py-2 px-3 rounded-l-xl font-medium flex items-center gap-2 duration-300",
          {
            "bg-slate-400 hover:bg-slate-500 text-gray-900":
              currentTheme !== "dark",
            "dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-gray-100":
              currentTheme === "dark",
          }
        )}
      >
        {currentTheme === "dark" ? (
          <>
            <span className="text-sm" aria-label="Light Mode">
              🔆
            </span>
            <span className="hidden lg:inline text-sm">Light Mode</span>
          </>
        ) : (
          <>
            <span className="text-sm" aria-label="Dark Mode">
              🌙
            </span>
            <span className="hidden lg:inline text-sm">Dark Mode</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Theme;
