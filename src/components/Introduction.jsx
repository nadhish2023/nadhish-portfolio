import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import 'boxicons/css/boxicons.min.css';

const rotatingTexts = ["Developer", "CSE Student", "Tech Enthusiast", "Problem Solver"];

const Introduction = React.forwardRef((props, ref) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullText = rotatingTexts[currentTextIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex]);

  return (
    <div ref={ref} className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="lg:order-2 lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center">
        <Spline
          className='absolute z-20 lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full'
          scene="https://prod.spline.design/QAZ8IgCaFZ8eap6U/scene.splinecode"
        />
      </div>

      {/* Introduction Text Section */}
      <div className="lg:order-1 lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center items-start pl-10 space-y-4 relative z-10 bg-transparent">
        {/* Welcome Line */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
          Hi, I'm <span className="text-white font-bold">Nadhish</span> 👋
        </h2>

        {/* Animated Line */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          I am a{" "}
          <span className="text-orange-500 border-r-2 border-orange-500 pr-1 animate-pulse">
            {displayText}
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl pt-2">
          Passionate about building impactful digital experiences. I love solving problems, writing clean code, and learning new technologies.
        </p>
      </div>
    </div>
  );
});

export default Introduction;