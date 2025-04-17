import { Link } from "react-router-dom";
import wavingEmoji from "../../assets/Images/SVG icons/Skin tone=Yellow.svg";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[25vw] text-left md:mt-[10vw] md:items-center">
        <div className="w-[90vw] h-[9vw] flex justify-center items-center border border-gray-500 rounded-xl md:w-[25vw] md:h-[2.5vw] md:rounded-full">
          <div className="text-[4vw] text-[#c1c1c1] font-medium font-Poppins md:text-[1vw]">
            <span>Transforming Ideas Into Reality...</span>
          </div>
        </div>

        <h1 className="text-[12vw] w-[85vw] mt-[6vw] font-bold text-white text-left md:mt-[1vw] md:text-[4.5vw] flex md:items-center md:justify-center md:text-center flex-wrap">
          Hello
          <span className="ml-3 w-14 h-14 inline-block origin-bottom-left md:w-20 md:h-20">
            <img
              src={wavingEmoji}
              alt="waving hand emoji"
              className="w-full h-full animate-wave"
            />
          </span>
          , I&apos;m&nbsp;<span>Owughikem Nkemakolam</span>
        </h1>

        <p className="text-gray-300 text-[4vw] text-left mx-8 leading-[1.7] font-Poppins mt-[3vw] md:mt-[0.5vw] md:text-[1.1vw] md:max-w-[50vw] md:text-center md:mx-0">
          Full Stack Developer specializing in MERN technologies, crafting
          high-performance web applications and delivering exceptional user
          experiences.
        </p>
      </div>
      <div className="flex justify-start ml-8 md:justify-center mt-[7vw] mb-[12vw] md:mt-[2vw] md:mb-[4vw]">
        <Link to="/projects">
          <button className="bg-transparent box border border-[#a1a1a1] text-white rounded-full font-medium flex items-center justify-center relative z-10 px-[7vw] py-[3vw] md:px-[1.4vw] md:py-[0.7vw]">
            <span className="font-Poppins text-[4vw] md:text-[1vw]">
              View Works
            </span>
            <GoArrowRight size={25} className="ml-2 md:size-[1.2vw]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
