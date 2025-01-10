import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { useEffect, useState } from "react";


const Carousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    // Update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine styles based on screen width
    const isMobile = windowWidth < 768;

    const iconSize = isMobile ? '30' : '40';


  return (
    <div className="relative">
      {/* Left fading effect */}
      <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex overflow-hidden text-white">
        <div className="relative flex min-w-[200%] justify-around items-center animate-scroll md:min-w-[100%]">
          <DiMongodb size={iconSize} color="#47A248" />
          <SiExpress size={iconSize} color="#333333" />
          <FaReact size={iconSize} color="#61DAFB" />
          <FaNodeJs size={iconSize} color="#339933"/>
          <RiTailwindCssFill size={iconSize} color="#06B6D4" />
          <FaHtml5 size={iconSize} color="#E34F26"/>
          <IoLogoCss3 size={iconSize} color="#1572B6"/>
          <IoLogoJavascript size={iconSize} color="#F7DF1E"/>
        </div>

        <div className="relative flex min-w-[200%] justify-around items-center animate-scroll md:min-w-[100%]">
          <DiMongodb size={iconSize} color="#47A248" />
          <SiExpress size={iconSize} color="#333333" />
          <FaReact size={iconSize} color="#61DAFB" />
          <FaNodeJs size={iconSize} color="#339933"/>
          <RiTailwindCssFill size={iconSize} color="#06B6D4" />
          <FaHtml5 size={iconSize} color="#E34F26"/>
          <IoLogoCss3 size={iconSize} color="#1572B6"/>
          <IoLogoJavascript size={iconSize} color="#F7DF1E"/>
        </div>
      </div>

      {/* Right fading effect */}
      <div className="absolute top-0 right-0 h-full w-[20%] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Carousel;
