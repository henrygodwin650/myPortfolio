import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navMenus = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-lg
        bg-white/70 dark:bg-slate-950/70
        border-b border-gray-200 dark:border-slate-800
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-wide"
        >
          <span className="text-orange-500">Port</span>
          <span className="text-slate-800 dark:text-white">
            folio
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navMenus.map((menu, index) => (
            <a
              key={index}
              href={menu.link}
              className="
                relative text-[16px] font-medium
                text-slate-700 dark:text-slate-200
                hover:text-orange-500
                transition duration-300
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px]
                after:bg-orange-500
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {menu.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              text-2xl
              text-slate-700 dark:text-slate-200
              hover:text-orange-500
              transition duration-300
              hover:rotate-180
            "
          >
            {theme === "dark" ? (
              <BiSolidSun />
            ) : (
              <BiSolidMoon />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="
              text-2xl
              text-slate-700 dark:text-white
              hover:text-orange-500
              transition
            "
          >
            {theme === "dark" ? (
              <BiSolidSun />
            ) : (
              <BiSolidMoon />
            )}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="
              text-3xl
              text-slate-700 dark:text-white
              hover:text-orange-500
              transition
            "
          >
            {showMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${showMenu ? "max-h-96 py-6" : "max-h-0"}
          bg-white/95 dark:bg-slate-950/95
          backdrop-blur-lg
        `}
      >
        <div className="flex flex-col items-center gap-6 text-lg">

          {navMenus.map((menu, index) => (
            <a
              key={index}
              href={menu.link}
              onClick={() => setShowMenu(false)}
              className="
                text-slate-700 dark:text-slate-200
                hover:text-orange-500
                transition duration-300
                font-medium
              "
            >
              {menu.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}