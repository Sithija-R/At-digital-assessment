import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Optional: close menu if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 bg-primary w-full px-[20px] sm:px-[80px] py-[26px] z-50">
        <div className="flex justify-between items-center relative">
          <div>
            <img src="./images/Logo.svg" alt="at digital logo" className="w-40" />
          </div>

          <ul className="hidden sm:flex gap-10 text-white font-inter">
            <li className="cursor-pointer hover:text-gray-300 transition">SERVICES</li>
            <li className="cursor-pointer hover:text-gray-300 transition">ABOUT US</li>
            <li className="cursor-pointer hover:text-gray-300 transition">CONTACT US</li>
            <li className="cursor-pointer hover:text-gray-300 transition">CAREERS</li>
          </ul>

          {/* Mobile hamburger icon */}
          <button
            className="sm:hidden text-white text-2xl relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile menu dropdown */}
          {isOpen && (
            <nav
              ref={menuRef}
              className=" sm:hidden absolute top-full right-0 mt-2 w-48  bg-white  text-gray-900 shadow-lg rounded z-40 py-3"
            >
              <ul className="flex flex-col gap-4 font-inter px-4">
                <li className="cursor-pointer hover:text-gray-600 transition">SERVICES</li>
                <li className="cursor-pointer hover:text-gray-600 transition">ABOUT US</li>
                <li className="cursor-pointer hover:text-gray-600 transition">CONTACT US</li>
                <li className="cursor-pointer hover:text-gray-600 transition">CAREERS</li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
