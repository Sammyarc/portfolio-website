import {useState} from "react";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import logo from "../../assets/Images/logo/DevSammy Logo.svg";
import {IoMdArrowForward} from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [menuVisible, setMenuVisible] = useState(false); // Tracks whether the menu is visible

    const toggleMenu = () => {
        if (isOpen) {
            // When closing, delay hiding the menu to allow slide-out animation
            setIsOpen(false);
            setTimeout(() => setMenuVisible(false), 500); // Match this timeout with the CSS animation duration
        } else {
            setMenuVisible(true);
            setIsOpen(true);
        }
    };

    // Toggle body scroll lock
    if (isOpen) {
        document.body.style.overflow = "hidden"; // Disable scroll
    } else {
        document.body.style.overflow = "auto"; // Enable scroll
    }

    return (
        <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
            <div
                className="container mx-auto flex items-center justify-between p-4 my-[1vw]">
                {/* Logo */}
                <img
                    src={logo}
                    alt="Dev Sammy logo"
                    className="w-[25vw] h-[10vw] md:w-[5vw] md:h-[3vw]"/> 
                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="outline-none border-none bg-transparent w-[10vw] h-[10vw] text-white flex justify-center items-center">
                        <HiOutlineMenuAlt3 className="text-[8vw]"/>
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-xl font-medium">
                    <li>
                        <a
                            href="#about"
                            className="hover:bg-gradient-to-r hover:text-transparent from-green-400 via-white to-green-400 bg-clip-text font-Poppins">
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:bg-gradient-to-r hover:text-transparent from-green-400 via-white to-green-400 bg-clip-text font-Poppins">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:bg-gradient-to-r hover:text-transparent from-green-400 via-white to-green-400 bg-clip-text font-Poppins">
                            Contact
                        </a>
                    </li>
                </ul>

                <a href="https://calendly.com/nkemakolamsam"
                    target="_blank" rel="noopener noreferrer" className="hidden md:flex">
                    <button >
                        <span className="font-Poppins text-[1.2vw]">Let&apos;s Discuss</span>
                    </button>
                </a>

            </div>

            {/* Mobile Overlay Menu */}
            {
                menuVisible && (
                    <div
                        className={`mobile-menu ${
                        isOpen
                            ? "slide-in"
                            : "slide-out"} fixed top-0 left-0 right-0 bottom-0 inset-0 bg-black text-white flex flex-col items-center pt-[30vw] z-50 md:hidden`}>
                        <button
                            onClick={toggleMenu}
                            className="absolute top-5 right-5 outline-none border-none bg-transparent w-[10vw] h-[10vw] text-white flex justify-center items-center">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                        <ul className="space-y-8 text-2xl font-semibold">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:bg-gradient-to-r from-green-400 via-white to-green-400 hover:bg-clip-text hover:text-transparent font-Poppins"
                                    onClick={toggleMenu}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="hover:bg-gradient-to-r from-green-400 via-white to-green-400 hover:bg-clip-text hover:text-transparent font-Poppins"
                                    onClick={toggleMenu}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:bg-gradient-to-r from-green-400 via-white to-green-400 hover:bg-clip-text hover:text-transparent font-Poppins"
                                    onClick={toggleMenu}>
                                    Contact
                                </a>
                            </li>
                        </ul>

                        {/* Bottom Section */}
                        <div
                            className="absolute bottom-10 left-5 right-5 bg-black text-white font-Poppins border border-gray-500 rounded-lg p-6 shadow-md flex flex-col items-start">
                            <h3
                                className="text-[6vw] bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent font-semibold">Get in Touch</h3>
                            <p className="text-[4.5vw] leading-normal my-4">Let’s collaborate or discuss exciting projects!</p>
                            <a href="https://calendly.com/nkemakolamsam"
                                target="_blank" rel="noopener noreferrer" className="flex items-center text-[4.5vw] bg-white text-black px-[3vw] py-[2vw] rounded-md font-medium">
                                Let&apos;s Discuss
                                <IoMdArrowForward size={20} className="ml-2"/>
                            </a>
                        </div>
                    </div>
                )
            }

        </nav>
    );
};

export default Navbar;
