import React from "react";

const skills = [
  { name: "C / C++", img: "/skills/ccpp.png" },
  { name: "Python", img: "/skills/python.png" },
  { name: "Java", img: "/skills/java.png" },
  { name: "HTML", img: "/skills/html.png" },
  { name: "CSS", img: "/skills/css.png" },
  { name: "JavaScript", img: "/skills/javascript.png" },
  { name: "React", img: "/skills/react.png" },
  { name: "Tailwind", img: "/skills/tailwind.png" },
  { name: "SQL", img: "/skills/sql.png" },
  { name: "Cloud Computing", img: "/skills/cloudcomputing.png" },
  { name: "BlockChain", img: "/skills/blockchain.png" },
  { name: "CyberSecurity", img: "/skills/cybersecurity.png" },
  { name: "Cryptography", img: "/skills/cryptography.png" },
  { name: "DevOps", img: "/skills/devops.png" },
  { name: "Git / GitHub", img: "/skills/git.png" },
  { name: "Agile", img: "/skills/agile.png" },
  { name: "Artificial Intelligence", img: "/skills/artificialintelligence.png" },
  { name: "Machine Learning", img: "/skills/machinelearning.png" }
];

const chunkSkills = (skills) => {
  const chunks = [];
  let i = 0;
  let toggle = true;
  while (i < skills.length) {
    const size = toggle ? 4 : 5;
    chunks.push(skills.slice(i, i + size));
    i += size;
    toggle = !toggle;
  }
  return chunks;
};

const Skills = React.forwardRef((props, ref) => {
  const skillChunks = chunkSkills(skills);

  return (
    <main ref={ref} className="relative z-0">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[160px] z-0" />
      {/* Skills Section */}
      <div className="w-full py-16 px-4 sm:px-6 md:px-12 bg-transparent relative z-10">
        {/* Heading */}
        <div className="w-full max-w-xl mx-auto p-[2px] rounded-2xl bg-gradient-to-br from-orange-400/40 via-orange-300/20 to-orange-500/30 shadow-lg mb-12">
          <div className="backdrop-blur-md bg-black/30 rounded-2xl py-6 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-center drop-shadow-md">
              My Skills
            </h2>
          </div>
        </div>

        {/* Skill Rows */}
        <div className="space-y-10">
          {skillChunks.map((chunk, index) => (
            <div
              key={index}
              className="flex justify-center gap-6 flex-wrap"
            >
              {chunk.map((skill, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center gap-2 p-4 bg-black/20 backdrop-blur-lg border border-orange-400/20 shadow-md rounded-xl transition-transform duration-300 hover:-translate-y-3 hover:shadow-orange-500/30 hover:shadow-xl"
                >
                  <div className="bg-gradient-to-br from-orange-500/10 to-yellow-300/10 p-4 rounded-xl flex items-center justify-center shadow-inner transition-transform group-hover:scale-110">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.7)] transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-orange-300 group-hover:text-yellow-400 group-hover:underline group-hover:underline-offset-4 transition-all duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
});

export default Skills;