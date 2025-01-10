import { useState, useEffect } from "react";
import CustomLoadingIndicator from "../src/components/CustomLoader/CustomLoadingIndicator";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

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
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
