import React, { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

export default function Navbar() {
  const navMenus = [
    {
      name: "Home",
      link: "/#home"
    },
    {
      name: "About",
      link: "/#about"
    },
    {
      name: "Services",
      link: "/#services"
    },
    {
      name: "Contact",
      link: "/#contact"
    }
  ]

  const [showMenu, setShowMenu] = React.useState(false);
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container flex justify-between items-center mx-auto py-3 sm:py-0">
          <h1 className="text-3xl text-orange-500 font-bold me-15">Portfolio</h1>
          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-1 lg:gap-2 xl:gap-3">
              {navMenus.map((menu, index) => (
                <li key={index} className="inline-block mx-4">
                  <a href={menu.link} className="hover:text-orange-500 text-xl font-semibold py-4 px-2 md:py-6 inline-block">{menu.name}</a>
                </li>
              ))}
              {/* Theme Toggle */}
              {
                theme === "dark" ? (
                  <BiSolidSun className="cursor-pointer hover:text-orange-500 me-2 text-3xl"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} />
                ) : (
                  <BiSolidMoon className="cursor-pointer hover:text-orange-500 me-2 text-3xl"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} />
                )
              }
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="block sm:hidden">
            <div className="flex justify-between items-center gap-4">
              {/* Theme Toggle */}
              {
                theme === "dark" ? (
                  <BiSolidSun className="cursor-pointer hover:text-orange-500 me-2 text-3xl"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} />
                ) : (
                  <BiSolidMoon className="cursor-pointer hover:text-orange-500 me-2 text-3xl"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} />
                )
              }
              <FiMenu className="cursor-pointer hover:text-primary me-2 text-3xl"
                onClick={toggleMenu} />
            </div>
            {showMenu && (
              <div className="fixed top-16 left-0 w-full bg-white dark:bg-gray-900 dark:text-white rounded-b-xl z-10 shadow-lg py-10">
                <ul className="flex flex-col items-center gap-4">
                  {navMenus.map((menu, index) => {
                    return (
                      <li key={index}>
                        <a href={menu.link} className="inline-block text-xl font-semibold px-2 py-4 cursor-pointer hover:bg-gray-200">
                          {menu.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
