import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "SERVICES", path: "/services" },
    { label: "ABOUT US", path: "/about" },
    { label: "CONTACT US", path: "/contact" },
    { label: "CAREERS", path: "/careers" },
  ];

  return (
    <header className="fixed top-0 bg-primary w-full px-[20px] sm:px-[80px] py-[26px] z-50">
      <div className="flex justify-between items-center relative">
        <NavLink to={"/"}>
          <img src="./images/Logo.svg" alt="at digital logo" className="w-50" />
        </NavLink>

        <ul className="hidden sm:flex gap-10 text-white font-inter">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "hover:text-gray-300 transition"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden text-white text-2xl relative cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <nav className="sm:hidden absolute top-full right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded z-40 py-3">
            <ul className="flex flex-col gap-4 font-inter px-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-bold"
                        : "hover:text-gray-600 transition"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
