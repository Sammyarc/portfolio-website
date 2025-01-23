import { useState, useEffect } from "react";
import CustomLoadingIndicator from "../components/CustomLoader/CustomLoadingIndicator";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Certification from "../components/Certifications/Certification";
import Button from "../components/WhatsApp/Button";
import Reviews from "../components/Testimonial/Reviews";


const Home = () => {
    const [isLoading, setIsLoading] = useState(() => {
        const loaderShown = sessionStorage.getItem("loaderShown");
        return loaderShown !== "true";
      });
      
      useEffect(() => {
        if (isLoading) {
          const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("loaderShown", "true");
          }, 20000); // Adjust duration as needed
      
          return () => clearTimeout(timer);
        }
      }, [isLoading]);
      

  return (
    <div>
      {isLoading ? (
        <CustomLoadingIndicator />
      ) : (
        <div>
          <Navbar />
          <main>
            <Hero />
            <Carousel />
            <About />
            <Projects />
            <Certification />
            <Reviews />
          </main>
          <footer>
            <Footer />
          </footer>
          <Button />
        </div>
      )}
    </div>
  );
};

export default Home;

