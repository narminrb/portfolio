import React from "react";
import secondmeImage from "../../assets/secondme.jpg"; 

const WhoIAm = () => {
  return (
    <section className="w-full py-20 bg-[#060606] border border-gray-700">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#5237f9]">Who I Am?</h2>
          <p className="text-white text-md leading-relaxed">
            My name is Narmin Balakishiyeva. I am a professional and enthusiastic 
            programmer in my daily life. I am a quick learner with a self-learning attitude. 
            I love to learn and explore new technologies and am passionate about problem-solving. 
            I love almost all the stacks of web application development and love to make the web 
            more open to the world. My core skill is based on JavaScript and I love to do most 
            of the things using JavaScript. I am available for any kind of job opportunity 
            that suits my skills and interests.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-[20px] overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-gray-500">
            <img
              src={secondmeImage}
              alt="Narmin"
              className="w-70 h-70 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
