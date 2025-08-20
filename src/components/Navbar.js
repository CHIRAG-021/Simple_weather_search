import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <header
    className="flex justify-between items-center w-full px-6 py-4 relative z-10 
               bg-white/20 dark:bg-gray-900/40 backdrop-blur-md border-b border-gray-300/30 dark:border-gray-700/30 shadow-sm"
  >
    <h1 className="text-3xl font-bold text-white dark:text-gray-200">Weather Search</h1>
    <ThemeSwitch />
  </header>
  
  );
};

export default Navbar;
