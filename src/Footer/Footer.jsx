

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className=" text-white py-4 text-center">
        <p className="text-[4.2vw] font-CenturySchoolbook md:text-[1.2vw]">
          &copy; {currentYear} DevSammy, &nbsp; All Rights Reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  