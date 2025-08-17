import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Only using Font Awesome (fa) icons
import { 
  FaBootstrap, FaReact, FaJs, FaHtml5, FaCss3Alt, 
  FaNodeJs, FaGitAlt, FaDatabase, FaProjectDiagram, 
  FaPencilRuler, FaDraftingCompass, FaCogs, FaCubes
} from "react-icons/fa";

const skills = [
  { name: "Figma", icon: <FaPencilRuler size={40} className="text-pink-400" /> },
  { name: "Redux", icon: <FaCogs size={40} className="text-purple-500" /> },
  { name: "Zustand", icon: <FaCubes size={40} className="text-orange-400" /> },
  { name: "Vite.js", icon: <FaDraftingCompass size={40} className="text-yellow-400" /> },
  { name: "Express", icon: <FaProjectDiagram size={40} className="text-gray-300" /> },
  { name: "MongoDB", icon: <FaDatabase size={40} className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-700" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
];

const SkillsSection = () => {
  return (
    <section className="w-full py-20 bg-[#060606]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#5237f9]">Skills</h2>

        <Swiper
  spaceBetween={20}
  centeredSlides={true}
  loop={true}
  slidesPerView={5}
  speed={1000} // higher = slower
  autoplay={{
    delay: 0, // no delay
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: { slidesPerView: 3 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 7 },
  }}
  modules={[Autoplay]}
>

          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center p-4 bg-[#141414] rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                {skill.icon}
                <span className="text-white mt-2">{skill.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsSection;
