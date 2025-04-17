import { useEffect, useState } from "react";

const CustomLoadingIndicator = () => {
  const [count, setCount] = useState(1);
  const [showContent, setShowContent] = useState(true);
  const [activeDiv, setActiveDiv] = useState(0);

  useEffect(() => {
    if (count < 100 && showContent) {
      const timer = setTimeout(() => setCount(count + 1), 25);
      return () => clearTimeout(timer);
    } else if (count === 100) {
      setTimeout(() => setShowContent(false), 100);
    }
  }, [count, showContent]);

  useEffect(() => {
    if (!showContent && activeDiv < 5) {
      const revealTimer = setTimeout(() => setActiveDiv(activeDiv + 1), 100);
      return () => clearTimeout(revealTimer);
    }
  }, [activeDiv, showContent]);

  return (
    <div className="relative h-screen w-screen bg-none overflow-hidden">
      {/* Welcome text and countdown */}
      {showContent && (
        <>
          <div className="absolute top-1/3 left-0 md:left-10 z-10">
            <h1 className="text-black text-[17vw] font-bold font-Bricolage md:text-[7vw]">Welcome!</h1>
          </div>
          <div className="absolute bottom-5 right-5 z-10">
            <p className="text-black text-[25vw] font-bold font-Bricolage md:text-[10vw]">{count}</p>
          </div>
        </>
      )}

      {/* 5 vertical reveal bars */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`absolute h-full w-[20%] bg-white transition-transform duration-700 ease-in-out ${
            activeDiv > index ? "-translate-y-full" : "translate-y-0"
          }`}
          style={{ left: `${index * 20}%` }}
        ></div>
      ))}
    </div>
  );
};

export default CustomLoadingIndicator;
