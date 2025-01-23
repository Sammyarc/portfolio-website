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
import {useRef, useState} from "react";
import {Link} from "react-router-dom";

const certifications = [
    {
        id: 1,
        image: Image1,
        title: "User Experience Design Fundamentals",
        organization: "IBM",
        link: "https://www.credly.com/badges/f86af73c-ad0b-4133-b6ac-35b7d33dc511/linked_in_p" +
                "rofile"
    }, {
        id: 2,
        image: Image2,
        title: "Career Essentials in Software Development by Microsoft and LinkedIn",
        organization: "Microsoft Corporation",
        link: "https://www.linkedin.com/learning/certificates/c2393202aeedd6ef4d12425035a7926" +
                "272861307d432f6c204536795d15fdd01"
    }, {
        id: 3,
        image: Image3,
        title: "Introduction to Career Skills in Software Development",
        organization: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/091b0548cded9666df6c9e21d3f1fed" +
                "325a54edef1e717d0d9700d9dcbb936c6"
    }, {
        id: 4,
        image: Image4,
        title: "JavaScript Essentials 1",
        organization: "Cisco Networking Academy",
        link: "https://www.credly.com/earner/earned/badge/495c8dae-e679-4a6c-bc14-bb073d9cfd3" +
                "8"
    }, {
        id: 5,
        image: Image5,
        title: "Version Control",
        organization: "Meta",
        link: "https://www.coursera.org/account/accomplishments/verify/YGDNHJQBTY67?utm_sourc" +
                "e%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campai" +
                "gn%3Dsharing_cta%26utm_product%3Dcourse"
    }, {
        id: 6,
        image: Image6,
        title: "Programming with JavaScript",
        organization: "Meta",
        link: "https://www.coursera.org/account/accomplishments/verify/XQRLC9ZGN8YY?utm_sourc" +
                "e%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campai" +
                "gn%3Dsharing_cta%26utm_product%3Dcourseampaign=sharing_cta&utm_product=course"
    }, {
        id: 7,
        image: Image7,
        title: "Introduction to Frontend Development",
        organization: "Meta",
        link: "https://www.coursera.org/account/accomplishments/verify/WD9NHRBRAB45?utm_sourc" +
                "e%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campai" +
                "gn%3Dsharing_cta%26utm_product%3Dcoursent=cert_image&utm_campaign=sharing_cta&" +
                "utm_product=course"
    }
];

const Certifications = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null); // Create a reference to access slider methods

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="mx-auto px-4 py-12 text-white md:px-[5vw]">
            <div
                className="flex flex-col md:flex-row justify-between space-x-[2vw] items-center">
                {/* Header Section */}
                <div className="mb-8">
                    <h2
                        className="text-[8vw]  font-Poppins font-bold bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent transition-all delay-150 text-center md:text-left md:text-[3vw]">Check Out</h2>
                    <p
                        className="text-white font-Poppins text-[4vw] mb-4 text-center md:text-left md:text-[1.5vw]">MY CERTIFICATES</p>
                    <p className="text-gray-400 mt-2 font-Poppins">
                        I have done various programming courses to increase my skills, and I’m sharing a
                        few of them.
                    </p>

                </div>

                {/* Slick Carousel */}
                <div className="w-full md:w-[60vw]">
                    <Slider {...settings} ref={sliderRef}>
                        {
                            certifications.map((cert) => (
                                <div key={cert.id} className="p-4">
                                    <div className=" text-white overflow-hidden">
                                        <Link to={cert.link}>
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-[60vw] md:h-[13vw] object-cover"/></Link>
                                        <div className="p-4">
                                            <h3 className="font-Poppins text-[4vw] mb-1 md:text-[1.2vw] font-semibold">{cert.title}</h3>
                                            <p className="text-green-600 font-Poppins text-[3.5vw] mb-1 md:text-[1vw]">{cert.organization}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
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
