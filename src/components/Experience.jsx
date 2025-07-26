import React from "react";

const experiences = [
  {
    title: " Software Engineering - Job Simulation",
    company: "Goldman Sachs",
    date: "Dec 2024",
    description:
      "Assessed IT security by identifying outdated password hashing using Hashcat and proposed enhancements like stronger password policies and modern hashing algorithms to improve protection.",
  },
  {
    title: "Digital Business Services - Job Simulation",
    company: "HSBC",
    date: "Dec 2024",
    description:
      "Completed a simulation in Operations and Technology within Digital Business Services, contributing to net-zero initiatives, organising project discovery, and analysing transaction data to identify priority currencies.",
  },
  {
    title: "Summer Research Intern",
    company: "VIT - Chennai",
    date: "May 2025 - July 2025",
    description:
    "Developed ML models (XGBoost, LSTM) to predict tidal current speeds with a focus on real-time deployment in constrained environments. Evaluated model accuracy, efficiency, and interpretability for edge-ready energy systems.",
  },
  {
    title: "Intern - Full Stack Developer",
    company: "Future Interns",
    date: "July 2025 - Present",
    description:
    "Currently learning, practicing, and implementing full stack web development using libraries and frameworks like React, Vite, TypeScript, Tailwind CSS, Bootstrap, and more.",
  }
];

const Experience = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="relative bg-black text-white pt-32 pb-20 px-4 md:px-16 overflow-visible z-0">
      {/* Gradient Image Left */}
      <img
        className="absolute top-0 left-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-img"
      />

      {/* Blur Effect Left */}
      <div
        className="h-0 w-[40rem] absolute
        top-[20%] left-[-5%] 
        shadow-[0_0_900px_20px_#e99b63]
        -rotate-[-30deg] -z-10"
      ></div>

      {/* Heading */}
      <div className="w-full max-w-xl mx-auto mb-16 relative z-10">
        <div className="p-[2px] rounded-2xl bg-gradient-to-br from-orange-400/40 via-orange-300/20 to-orange-500/30 shadow-lg">
          <div className="backdrop-blur-md bg-black/30 rounded-2xl py-6 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-center drop-shadow-md">
              My Experience
            </h2>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 to-orange-500 z-0" />

        {/* Experience Boxes */}
        <div className="flex flex-col gap-20 relative z-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative w-full md:w-1/2 ${
                  isLeft ? "md:pr-8 md:self-start" : "md:pl-8 md:self-end"
                }`}
              >
                {/* Dot */}
                <div
                  className={`hidden md:block absolute top-4 w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border border-black ${
                    isLeft ? "-right-2" : "-left-2"
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-orange-500 shadow-lg">
                  <h3 className="text-orange-400 text-xl font-bold">
                    {exp.title}
                  </h3>
                  <p className="text-yellow-400 mt-1 font-semibold">
                    {exp.company} | {exp.date}
                  </p>
                  <p className="text-gray-300 mt-3">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Experience;