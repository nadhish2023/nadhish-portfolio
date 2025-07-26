import React from "react";

const educationList = [
  {
    title: "Bachelor of Technology in Computer Science Engineering",
    institution: "Vellore Institute of Technology, Chennai",
    timeline: "2023 - Present",
    score: "CGPA: 8.92 / 10",
  },
  {
    title: "DevOps, Agile and Design Thinking",
    institution: "IBM - Adriot technologies",
    timeline: "May 2025 - July 2025",
    score: "Score: 100%",
  },
];

const Education = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full px-4 sm:px-8 py-16 bg-transparent z-10"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[160px] z-0" />
      {/* Heading */}
      <div className="w-full max-w-xl mx-auto p-[2px] rounded-2xl bg-gradient-to-br from-orange-400/40 via-orange-300/20 to-orange-500/30 shadow-lg mb-12">
        <div className="backdrop-blur-md bg-black/30 rounded-2xl py-6 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-center drop-shadow-md">
            My Education
          </h2>
        </div>
      </div>

      {/* Education Boxes */}
      <div className="flex flex-col gap-8 items-center">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="w-full max-w-4xl border border-orange-500/30 bg-neutral-900/90 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              {edu.title}
            </h3>
            <p className="text-md text-orange-300 mt-1">{edu.institution}</p>
            <p className="text-sm text-gray-400 mt-1">{edu.timeline}</p>
            {edu.score && (
              <p className="text-sm text-amber-300 mt-1">{edu.score}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Education;
