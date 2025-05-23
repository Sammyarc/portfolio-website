
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useRef } from "react";
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Collaborating with Owughikem Nkemakolam during our internship was an outstanding experience. As a Front-End Developer, Nkemakolam consistently demonstrated remarkable creativity, technical expertise, and a contagious enthusiasm. He had an impressive knack for transforming complex design concepts into fluid, interactive web interfaces, always ensuring that each detail was meticulously crafted to perfection.",
    name: "Bolanle Akindeinde",
    designation: "Product Designer | UI/UX Designer",
  },
  {
    id: 2,
    quote: "Owughikem has a great problem-solving mindset and always stays up to date with the latest trends and best practices in React development. His collaborative approach and dedication to delivering high-quality work make him a valuable asset to any project. I highly recommend him for any frontend role, especially those requiring proficiency in React.js",
    name: "Ikechukwu Atuma",
    designation: "Frontend Developer",
  },
  {
    id: 3,
    quote: "What sets Nkemakolam apart is his eagerness to learn and adapt. He consistently went above and beyond to understand the project requirements and was always open to feedback, using it as an opportunity to refine and improve his work.",
    name: "Emmanuel Kingson",
    designation: "UI/UX Designer",
  },
  {
    id: 4,
    quote: "I had the privilege of mentoring Owughikem while working at Enoverlab as a Product Mentor and he is a breathe of fresh air. He rose to the occasion and I am proud to have been a part of that journey. His communication skills is top-notch. His dedication and passion for what he does is unmatched. He is active and participatory and I am proud to have worked on that project with him. Owughikem has my highest recommendation!",
    name: "Abiola Ademuyiwa",
    designation: "Technical Support | Product Manager",
  },
  {
    id: 5,
    quote: "He is an exceptional front-end developer with a strong grasp of CSS, HTML, React, & JavaScript. Owughikem Nkemakolam is highly dedicated and always goes above and beyond to deliver high-quality work.",
    name: "Abdulrahman Aliyu",
    designation: "Marketing Analyst | Brand Manager",
  },
];

const Reviews = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null); // Create a reference to access slider methods

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 10000,
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
    <div className="mx-auto px-4 my-12 text-white md:px-[5vw] md:my-[8vw]">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[7.5vw] mb-[4vw] text-center font-bold font-Poppins text-white md:mb-[2vw] md:text-[3vw]"
      >
        Voices of Satisfaction
      </motion.h2>
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="p-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="p-[3vw] border border-gray-500 rounded-md text-white overflow-hidden md:p-[1vw]">
              <p title="Click to read more" className="text-[4vw] text-gray-300 font-Poppins leading-normal mb-4 md:text-[1.1vw]" onClick={() => handleToggle(testimonial.id)}>
                {expandedId === testimonial.id
                  ? `"${testimonial.quote}"`
                  : `"${testimonial.quote.slice(0, 200)}..."`}</p>
              <h3 className="text-[4.2vw] font-Poppins font-semibold md:text-[1.3vw]">{testimonial.name}</h3>
              <p className="text-green-500 font-Poppins text-sm">{testimonial.designation}</p>
            </div>
          </motion.div>
        ))}
      </Slider>

      {/* Custom Dots */}
      <div className="slick-dots">
        {
          testimonials.map((_, index) => (
            <motion.button key={index} className={`dot ${activeSlide === index
              ? "slick-active"
              : ""}`} onClick={() => sliderRef.current.slickGoTo(index)}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.3 }}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Reviews;
