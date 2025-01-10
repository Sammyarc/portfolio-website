import {useEffect, useRef} from "react";
import Typed from "typed.js";

const CustomLoadingIndicator = () => {
    const el = useRef(null); // Reference for the element where Typed.js will run

  useEffect(() => {
    const messages = [
        "Welcome! Let's create something extraordinary...",
        "Got an idea? Let's bring it to life together...",
        "Ready to dive into the possibilities?"
      ];
      

    const typed = new Typed(el.current, {
      strings: messages, // Array of messages
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of deleting
      backDelay: 1500, // Delay before starting to delete
      loop: false, // Loop the messages
    });

    return () => {
      typed.destroy(); // Clean up Typed.js instance on component unmount
    };
  }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
           <svg
  width="100"
  height="50"
  viewBox="0 0 120 50"
  xmlns="http://www.w3.org/2000/svg"
  className="loading-indicator mx-auto"
>
   {/* Left angle bracket */}
  <path
    d="M30 10 L10 25 L30 40"
    stroke="white"
    strokeWidth="2"
    fill="transparent"
    transform="translate(-10, 0)"
  />

   { /* Slash */}
  <path
    d="M40 40 L60 10"
    stroke="white"
    strokeWidth="2"
    fill="transparent"
  />

  {/* Right angle bracket */ }
  <path
    d="M70 10 L90 25 L70 40"
    stroke="white"
    strokeWidth="2"
    fill="transparent"
      
  />
</svg>

            <p className="mt-4 px-[2vw] text-[5.5vw] md:text-[2vw] text-center font-semibold font-CenturySchoolbook text-white">
            <span ref={el}></span>
            </p>
        </div>
    );
};

export default CustomLoadingIndicator;
