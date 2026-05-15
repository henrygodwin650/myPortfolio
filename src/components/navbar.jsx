import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  const navMenus = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 top-0 z-50 sticky shadow-sm border-b border-gray-200 dark:border-gray-700 dark:text-white">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">Portfolio</h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navMenus.map(menu => (
            <a key={menu.name} href={menu.link} className="hover:text-orange-500 transition font-medium">
              {menu.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="text-2xl hover:text-orange-500 transition">
            {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-2xl">
            {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
          </button>
          <button onClick={() => setShowMenu(!showMenu)} className="text-3xl">
            {showMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t py-6">
          <div className="flex flex-col items-center gap-6 text-lg">
            {navMenus.map(menu => (
              <a 
                key={menu.name} 
                href={menu.link} 
                onClick={() => setShowMenu(false)}
                className="hover:text-orange-500"
              >
                {menu.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}