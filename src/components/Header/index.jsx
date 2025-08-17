import React from "react";
import meImage from "../../assets/me.jpg"; 
import './styles.css'

const Intro = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-between bg-[#060606]">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto w-full">
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="wordstart">Welcome to my world</h3>
        <h1 className="name">
          I’m Narmin Balakishiyeva
        </h1>
        <h2 className="name mb-5">
          A <span className="job">Front-End Developer</span>
        </h2>
        <p className="text-gray-600 max-w-lg mb-6">
          A personal portfolio is a collection of your work, achievements, and skills
          that highlights your abilities and professional growth. It serves as your
          digital identity.
        </p>
        <div>
          <p className="mb-3 text-lg font-medium text-white">Find me on</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-white hover:text-purple-600">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <i className="ri-linkedin-line"></i>
            </a>
          </div>
        </div>
      </div>
  
      <div className="flex-1 flex justify-center mt-10 lg:mt-0">
  <div
    className="p-[2px] rounded-[20px] bg-gradient-to-r from-[#5237f9] to-[#FF014F]"
  >
    <div className="bg-[#141414] rounded-[17px] p-4">
      <img
        src={meImage}
        alt="Jane Cooper"
        className="w-[400px] h-[550px] object-cover "
      />
    </div>
  </div>
</div>




    </div>
  </section>
  
 
  );
};

export default Intro;
