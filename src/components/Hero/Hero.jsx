import { Link } from "react-router-dom";
import wavingEmoji from "../../assets/Images/SVG icons/Skin tone=Yellow.svg";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center mt-[25vw] text-left md:mt-[10vw] md:items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-[90vw] h-[9vw] flex justify-center items-center border border-gray-500 rounded-xl md:w-[25vw] md:h-[2.5vw] md:rounded-full"
        >
          <div className="text-[4vw] text-[#c1c1c1] font-medium font-Poppins md:text-[1vw]">
            <span>Transforming Ideas Into Reality...</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-[12vw] w-[85vw] mt-[6vw] font-bold text-white text-left md:mt-[1vw] md:text-[4.5vw] flex md:items-center md:justify-center md:text-center flex-wrap"
        >
          Hello
          <span className="ml-3 w-14 h-14 inline-block origin-bottom-left md:w-20 md:h-20">
            <img
              src={wavingEmoji}
              alt="waving hand emoji"
              className="w-full h-full animate-wave"
            />
          </span>
          , I&apos;m&nbsp;<span>Owughikem Nkemakolam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-300 text-[4vw] text-left mx-8 leading-[1.7] font-Poppins mt-[3vw] md:mt-[0.5vw] md:text-[1.1vw] md:max-w-[50vw] md:text-center md:mx-0"
        >
          Full Stack Developer specializing in MERN technologies, crafting
          high-performance web applications and delivering exceptional user
          experiences.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col  ml-8 gap-5 mt-[7vw] mb-[12vw] md:flex-row md:justify-center md:mt-[2vw] md:mb-[4vw]"
      >
        <Link to="/projects">
          <button className="bg-transparent box border border-[#a1a1a1] text-white rounded-full mx-auto font-medium flex items-center justify-center relative z-10 px-[7vw] py-[3vw] md:mx-0 md:px-[1.4vw] md:py-[0.7vw]">
            <span className="font-Poppins text-[4vw] md:text-[1vw]">
              View Works
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <GoArrowRight size={25} className="ml-2 md:size-[1.2vw]" />
            </motion.div>
          </button>
        </Link>

        <Link to="https://docs.google.com/document/d/19jjpr-4qy6UThhWnrqFfzVIzYJ2Li0rWp4qJiECvg1s/edit?usp=sharing" target="blank">
          <button className="bg-transparent box border border-[#a1a1a1] text-white rounded-full font-medium flex items-center justify-center relative z-10 px-[7vw] py-[3vw] md:px-[1.4vw] md:py-[0.7vw]">
            <span className="font-Poppins text-[4vw] md:text-[1vw]">
              My Resume
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <GoArrowRight size={25} className="ml-2 md:size-[1.2vw]" />
            </motion.div>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
