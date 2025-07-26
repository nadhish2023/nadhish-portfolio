import React, { useRef } from 'react';
import Header from "./components/Header"
import Experience from "./components/Experience"
import Introduction from "./components/Introduction"
import Education from './components/Education';
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const introductionRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <title>Nadhish Portfolio</title>
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-img"
      />
      <div
        className="h-0 w-[40rem] absolute top-[20%] right-[-5%] 
        shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"
      />

      <Header
        scrollToAbout={() => scrollToSection(introductionRef)}
        scrollToEducation={() => scrollToSection(educationRef)} 
        scrollToExperience={() => scrollToSection(experienceRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <Introduction ref={introductionRef} />
      <Education ref={educationRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </main>
  )
}