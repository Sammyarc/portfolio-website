

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className=" text-white mt-[8vw] mb-[3vw] text-center md:mt-[3vw] md:mb-[2vw]">
        <p className="text-[4.2vw] font-Poppins md:text-[1vw]">
          &copy; {currentYear} DevSammy, &nbsp; All Rights Reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  