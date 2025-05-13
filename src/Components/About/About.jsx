import React from "react";
import AboutImg from "../../assets/ImgAbout.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold ml-[11.5rem]">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
           <img className="md:h-[25rem] w-full md:w-auto object-cover mr-[10rem]" src={AboutImg} alt="About img"  /> 

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Experienced in crafting responsive and interactive user interfaces using HTML, CSS, Bootstrap, Tailwind CSS, and Framer Motion.
                I focus on creating clean, modern designs with smooth animations and great user experience.
                </p>
              </span>
            </div>


            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Proficient in working with both relational and NoSQL databases like SQL and MongoDB. I design efficient schemas,
                 manage data operations, and ensure data consistency and performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Skilled in building robust backend systems using Node.js and Express.js. I develop scalable APIs, handle server-side logic, 
                and ensure seamless integration between frontend and database layers.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
