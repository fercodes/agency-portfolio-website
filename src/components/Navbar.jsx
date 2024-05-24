import { useState } from "react";
import { hamburger } from "../assets/icons";
import { closeButton } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute z-10 flex w-full flex-wrap items-center justify-between bg-transparent p-5">
      <div className="mr-6 flex flex-shrink-0 items-center text-black">
        <img src={headerLogo} className="h-8 w-auto" alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 text-black hover:text-white"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <img src={closeButton} className="h-4 w-4" alt="Menu" />
          ) : (
            <img src={hamburger} className="h-4 w-4" alt="Menu" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } block w-full flex-grow lg:flex lg:w-auto lg:items-center lg:justify-center`}
      >
        <ul className="flex flex-1 items-center justify-center gap-20 text-lg max-lg:flex-col lg:flex-grow">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-white hover:text-cool-yellow lg:mt-0 lg:inline-block"
            >
              {item.label}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
