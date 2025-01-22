
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Slider/Customdots.css";
import Image1 from "../../assets/Images/Certifications/1725088822158.jpeg";
import Image2 from "../../assets/Images/Certifications/1717051626882.jpeg";
import Image3 from "../../assets/Images/Certifications/1717025560455.jpeg";
import Image4 from "../../assets/Images/Certifications/1721825993876.jpeg";
import Image5 from "../../assets/Images/Certifications/CERTIFICATE_LANDING_PAGE~YGDNHJQBTY67.jpeg";
import Image6 from "../../assets/Images/Certifications/CERTIFICATE_LANDING_PAGE~XQRLC9ZGN8YY.jpeg";
import Image7 from "../../assets/Images/Certifications/CERTIFICATE_LANDING_PAGE~WD9NHRBRAB45.jpeg";
import { useRef, useState } from "react";

const certifications = [
  {
    id: 1,
    image: Image1,
    title: "User Experience Design Fundamentals",
    organization: "IBM",
  },
  {
    id: 2,
    image: Image2,
    title: "Career Essentials in Software Development by Microsoft and LinkedIn",
    organization: "Microsoft Corporation",
  },
  {
    id: 3,
    image: Image3,
    title: "Introduction to Career Skills in Software Development",
    organization: "LinkedIn",
  },
  {
    id: 4,
    image: Image4, 
    title: "JavaScript Essentials 1",
    organization: "Cisco Networking Academy",
  },
  {
    id: 5,
    image: Image5,
    title: "Version Control",
    organization: "Meta",
  },
  {
    id: 6,
    image: Image6,
    title: "Programming with JavaScript",
    organization: "Meta",
  },
  {
    id: 7,
    image: Image7,
    title: "Introduction to Frontend Development",
    organization: "Meta",
  },
];

const Certifications = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null); // Create a reference to access slider methods


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-12 text-white">
      <div className="flex flex-col md:flex-row justify-between space-x-[2vw] items-center">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-[8vw]  font-Poppins font-bold bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent transition-all delay-150 text-center md:text-left md:text-[3vw]">Check Out</h2>
          <p className="text-white font-Poppins text-[4vw] mb-4 text-center md:text-left md:text-[1.5vw]">MY CERTIFICATES</p>
          <p className="text-gray-400 mt-2 font-Poppins">
            I have done various programming courses to increase my skills, and I’m sharing a few of them.
          </p>
          
        </div>

        {/* Slick Carousel */}
        <div className="w-full md:w-[60vw]">
        <Slider {...settings} ref={sliderRef}>
          {certifications.map((cert) => (
            <div key={cert.id} className="p-4">
              <div className=" text-white overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-[60vw] md:h-[13vw] object-cover"
                />
                <div className="p-4">
                  <h3 className="font-Poppins text-[4vw] mb-1 md:text-[1.2vw] font-semibold">{cert.title}</h3>
                  <p className="text-green-600 font-Poppins text-[3.5vw] mb-1 md:text-[1vw]">{cert.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Custom Dots */}
        <div className="slick-dots">
                {
                    certifications.map((_, index) => (
                        <button key={index} className={`dot ${activeSlide === index
                                ? "slick-active"
                                : ""}`} onClick={() => sliderRef.current.slickGoTo(index)}
                            // Navigate to the clicked slide
/>
                    ))
                }
            </div>
        </div>

        
      </div>
    </section>
  );
};

export default Certifications;
