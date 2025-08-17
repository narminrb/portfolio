import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projects = [
  {
    name: "RR Group",
    tools: ["React", "Tailwind", "JavaScript","Html","SCSS"],
    myRole: "Frontend Developer",
    description:
      "Developed a corporate website with responsive design, dynamic sections, and backend integration.",
    demo: "https://rrgroup.az/",
  },
  {
    name: "E-commerce website",
    tools: ["React", "Tailwind", "JavaScript","Html","SCSS"],
    myRole: "Frontend Developer",
    description:
      "Created a frontend project showcasing responsive design and dynamic content interaction.",
    demo: "https://github.com/narminrb/finalproject",
  },
];

// Child component for each project card
function ProjectCard({ project }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  // ✅ Animate only after component is mounted
  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.8, opacity: 0.5 });
    }
  }, [controls, inView]);

  return (
    <motion.div
    ref={ref}
    animate={controls}
    initial={{ scale: 0.8, opacity: 0.5 }}
    transition={{ type: "spring", stiffness: 120, damping: 20 }}
    className="relative min-w-[300px] w-[300px] flex-shrink-0 p-[1px] rounded-2xl
               bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
  >
    {/* Inner content with dark background */}
    <div className="bg-[#141414] rounded-2xl p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
      <p className="text-gray-400 mb-2">{project.tools.join(", ")}</p>
      <p className="text-gray-300 mb-3">
        <strong>Role:</strong> {project.myRole}
      </p>
      <p className="text-gray-300 mb-3">{project.description}</p>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md hover:opacity-90"
        >
          View Demo
        </a>
      )}
    </div>
  </motion.div>
  
  );
}

export default function ProjectsCarousel() {
  return (
    <section className="w-full py-20 bg-[#060606]">
      <div className="max-w-screen-xl mx-auto px-4 overflow-x-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#5237f9]">
          Projects
        </h2>

        <div className="flex gap-8 items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
