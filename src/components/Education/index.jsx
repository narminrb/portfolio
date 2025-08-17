import React from "react";

const EducationSection = () => {
  const education = [
    {
      period: "September 2023 - Present",
      school: "Khazar University",
      course: "Computer Science",
      icon: "🎓",
    },
    {
      period: "July 2024 - June 2025",
      school: "Code Academy",
      course: "Front-End Development",
      icon: "💻",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#060606]">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
  
        <div className="flex-1 flex justify-center">
                  <div className="rounded-[20px] overflow-hidden transform transition-transform duration-300 hover:scale-105 ">
                    <img
                       src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg"
                       alt="Computer"
                       className="w-80 h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

        {/* Left: Cards */}
        <div className="flex-1 flex flex-col gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-center bg-[#141414] rounded-lg shadow-md p-4 gap-4"
            >
              {/* Icon */}
              <div className="text-3xl">{edu.icon}</div>

              {/* Text */}
              <div className="flex flex-col w-full">
                <h3 className="text-center text-[#16f2b3]  mb-2">
                  {edu.period}
                </h3>
                <h4 className="text-white uppercase text-[20px]">{edu.school}</h4>
                <p className="text-gray-400">{edu.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
