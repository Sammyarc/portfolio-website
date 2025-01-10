import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {

    const typedElement = useRef(null);

    useEffect(() => {
      const typed = new Typed(typedElement.current, {
        strings: [
          "Crafting Digital Experiences Just For You...",
          "Designing Solutions With Precision...",
          "Transforming Ideas Into Reality...",
          "Building Innovative Web Solutions...",
        ],
        typeSpeed: 70, // Speed of typing
        backSpeed: 30, // Speed of backspacing
        loop: true,    // Loop the animation
      });
  
      return () => {
        typed.destroy(); // Clean up on component unmount
      };
    }, []);


    return (
        <div
            className="flex flex-col justify-center items-center mt-[30vw] mb-[10vw] text-center md:mt-[12vw] md:mb-[4vw]">
                <div className="w-[90vw] h-[9vw] flex justify-center items-center border border-gray-300 rounded-xl md:w-[25vw] md:h-[2.5vw] md:rounded-full">
                <div
                className="text-[4vw] text-white font-medium font-CenturySchoolbook md:text-[1vw]">
                <span ref={typedElement}></span>
            </div>
                </div>
            
            <h1
                className="font-CenturySchoolbook text-[9vw] mt-[3vw] font-extrabold text-white md:mt-[1vw] md:text-[3.5vw]">
                Hey, I am
                <span
                    className="bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent text-[9vw] ml-2 md:text-[3.5vw] ">
                    Owughikem Nkemakolam
                </span>
            </h1>
            <p
                className="text-gray-300 text-[4vw] font-CenturySchoolbook mt-[3vw] md:mt-[1vw] md:text-[1.3vw] md:max-w-[40vw]">
                A MERN Stack Developer dedicated to building scalable web solutions and
                innovative digital experiences.
            </p>
            <div className="btn-outline p-[0.5vw] mt-[6vw] h-[12vw] rounded-[1.5vw] md:mt-[2vw] md:h-[3.5vw] md:p-[0.1vw] md:rounded-[0.5vw]">
                <a
                    href="#projects"
                    className=" text-white text-[4vw] bg-black w-full h-full p-[4vw] rounded-md flex justify-center items-center font-CenturySchoolbook relative z-10 md:p-[1vw] md:text-[1.2vw]">
                    Explore My Works
                </a>
                <div className="btn-gradient w-[22vw] h-[22vw] md:w-[7vw] md:h-[7vw]"></div>
            </div>

        </div>
    );
};

export default Hero;
