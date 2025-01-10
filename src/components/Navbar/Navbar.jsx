import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/Images/logo/DevSammy Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 my-[1vw]">
        {/* Logo */}
        <img src={logo} alt="Dev Sammy logo" className="w-[25vw] h-[10vw] md:w-[5vw] md:h-[3vw]" />

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="outline-none border-none bg-transparent w-[10vw] h-[10vw] text-white flex justify-center items-center"
          >
            <HiOutlineMenuAlt3 className="text-[8vw]" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-xl font-medium">
          <li>
            <a href="#about" className="hover:bg-gradient-to-r hover:text-transparent from-green-400 via-white to-green-400 bg-clip-text font-CenturySchoolbook">
              About 
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:bg-gradient-to-r hover:text-transparent from-green-400 via-white to-green-400 bg-clip-text font-CenturySchoolbook">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:bg-gradient-to-r hover:text-transparent from-green-400 via-white to-green-400 bg-clip-text font-CenturySchoolbook">
              Contact
            </a>
          </li>
        </ul>

        <button className="hidden md:flex">
          <span className="font-CenturySchoolbook text-[1.2vw]">Let&apos;s Talk</span>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`mobile-menu ${
          isOpen ? "slide-in" : "slide-out"
        } fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 outline-none border-none bg-transparent w-[10vw] h-[10vw] text-white flex justify-center items-center"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="space-y-8 text-2xl font-semibold">
          <li>
            <a
              href="#home"
              className="hover:text-green-500 font-CenturySchoolbook"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-green-500 font-CenturySchoolbook"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-green-500 font-CenturySchoolbook"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-green-500 font-CenturySchoolbook"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
