import React from "react";

const projects = [
  {
    title: "Finance Management | DevOps-Integrated App",
    description:
      "A desktop app to manage personal finances, built with a full DevOps pipeline including CI/CD, containerization, and real-time monitoring.",
    img: "/projects/financedashboard.png",
    link: "https://github.com/nadhish2023/FinanceDashboard",
    tags: ["DevOps", "Python", "Kubernetes", "CI/CD"],
  },
  {
    title: "Automated Rain Alert System",
    description:
      "A fully automated Python application that runs in the cloud, fetching real-time weather forecasts via a public API. If rain is predicted within 24 hours, it sends an instant alert through a messaging API -no manual checks required.",
    img: "/projects/rainalert.png",
    tags: ["Python", "API", "Automated"],
  },
  {
    title: "SecureLynk - Secure IoT Data Transmission",
    description:
      "Built a secure multi-cloud system using OpenStack where simulated IoT devices send encrypted data for centralized processing and verification. Implemented AES encryption and secure networking for scalable, end-to-end data protection.",
    img: "/projects/securelynk.png",
    tags: ["IoT", "IaaS", "Encryption", "Multi-Cloud"],
  },
  {
    title: "Penetration Testing with Metasploitable",
    description:
      "Performed penetration testing and ransomware simulations on Metasploitable to uncover vulnerabilities and improve network security through targeted exploitation and mitigation strategies.",
    img: "/projects/penetrationtesting.png",
    tags: ["Cybersecurity", "Network Security", "Ethical Hacking"],
  },
  {
    title: "ML-Based Tidal Energy Forecasting",
    description:
      "Compared XGBoost and LSTM models for predicting tidal current speeds using a synthetic dataset, focusing on both accuracy and deployability. Evaluated model performance in constrained environments using metrics like inference time, memory footprint, and interpretability.",
    img: "/projects/mlintidalenergy.png",
    tags: ["Tidal Energy" ,"XGBoost" ,"LSTM", "Python"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative w-full sm:w-[400px] h-[250px]">
      <div
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 
                   opacity-0 group-hover:opacity-75 transition duration-700 blur-xl"
      ></div>
      <div className="relative w-full h-full overflow-hidden rounded-xl border border-orange-500/40 bg-neutral-900">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div
          className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6
                     transition-all duration-500 ease-in-out z-20
                     [clip-path:circle(0%_at_50%_50%)] 
                     group-hover:[clip-path:circle(75%_at_50%_50%)]"
        >
          <h3 className="text-xl font-bold text-orange-400">{project.title}</h3>
          <p className="text-sm text-gray-200 mt-2">{project.description}</p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-orange-400 font-semibold
                         hover:underline hover:text-orange-300 transition-colors duration-300"
            >
              View Project →
            </a>
          )}
        </div>
        <div className="absolute bottom-0 left-0 p-4 w-full transition-opacity duration-300 group-hover:opacity-0 z-10">
          <h3 className="text-lg font-bold bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 text-transparent bg-clip-text line-clamp-1">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-black/40 text-gray-300 text-xs font-semibold px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const chunkProjects = (projects) => {
  const chunks = [];
  let i = 0;
  let toggle = true;
  while (i < projects.length) {
    const size = toggle ? 2 : 1;
    chunks.push(projects.slice(i, i + size));
    i += size;
    toggle = !toggle;
  }
  return chunks;
};

const Projects = React.forwardRef((props, ref) => {
  const chunks = chunkProjects(projects);

  return (
    <div
      ref={ref}
      className="relative w-full px-4 sm:px-8 py-16 bg-transparent z-10"
    >
      <div className="absolute inset-0 -z-10">
        <img
          className="absolute top-0 right-0 opacity-40"
          src="/gradient.png"
          alt="Gradient-img"
        />
        <div
          className="h-0 w-[40rem] absolute top-[10%] right-[-15%] 
          shadow-[0_0_1200px_40px_#e99b63] -rotate-[30deg]"
        />
      </div>

      {/* Heading */}
      <div className="w-full max-w-xl mx-auto p-[2px] rounded-2xl bg-gradient-to-br from-orange-400/40 via-orange-300/20 to-orange-500/30 shadow-lg mb-12">
        <div className="backdrop-blur-md bg-black/30 rounded-2xl py-6 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-center drop-shadow-md">
            My Projects
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-12 items-center">
        {chunks.map((chunk, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-wrap justify-center gap-8 md:gap-12 ${
              chunk.length === 1
                ? "justify-center"
                : "justify-center sm:justify-between"
            } w-full max-w-[900px]`}
          >
            {chunk.map((project, index) => (
              <ProjectCard key={`${rowIndex}-${index}`} project={project} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
