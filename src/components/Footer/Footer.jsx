import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white mt-[8vw] mb-[3vw] text-center md:mt-[3vw] md:mb-[2vw]"
    >
      <p className="text-[4.2vw] font-Poppins md:text-[1vw]">
        &copy; {currentYear} DevSammy, &nbsp; All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
