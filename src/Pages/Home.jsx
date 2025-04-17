import { useState, useEffect } from "react";
import CustomLoadingIndicator from "../components/CustomLoader/CustomLoadingIndicator";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
// import Button from "../components/WhatsApp/Button";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(() => {
  //   const loaderShown = sessionStorage.getItem("loaderShown");
  //   return loaderShown !== "true";
  // });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        // sessionStorage.setItem("loaderShown", "true");
        setIsLoading(false);
      }, 6200); 

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="relative">
      {/* Main Content Always Rendered */}
      <div>
        <Navbar />
        <main>
          <Hero />
          <Carousel />
        </main>
        <footer>
          <Footer />
        </footer>
        {/* <Button /> */}
      </div>

      {/* Loader overlay */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <CustomLoadingIndicator />
        </div>
      )}
    </div>
  );
};

export default Home;
