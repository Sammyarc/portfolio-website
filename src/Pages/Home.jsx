import { useState, useEffect } from "react";
import CustomLoadingIndicator from "../components/CustomLoader/CustomLoadingIndicator";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";


const Home = () => {
  const [isLoading, setIsLoading] = useState(() => {
    const loaderShown = sessionStorage.getItem("loaderShown");
    return loaderShown !== "true";
  });

  useEffect(() => {
    const clearSessionStorageTimer = setTimeout(() => {
      sessionStorage.removeItem("loaderShown");
    }, 3600000); // Clear after 1 hour (3600000 ms)

    return () => clearTimeout(clearSessionStorageTimer);
  }, []);


  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("loaderShown", "true");
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
