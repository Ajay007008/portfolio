import React from "react";
import { FaCss3,  FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


import W3villa from "../../assets/w3villa.png";
import MinistryIcon from "../../assets/MoAFfinal.png";
import TataMotors from "../../assets/TataMotors.png"




const Experience = () => (
  <div id="Experience" className="p-10 md:p-24">
    <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
    <div className="flex flex-wrap items-center justify-around">


      <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaHtml5 color="#E34F26" size={50} />
        </span>

        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaCss3 color="#1572B6" size={50} />
        </span>

        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaReact color="#61DAFB" size={50} />
        </span>

        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaJs color="#F7DF1E" size={50} />
        </span>

      
{/* 
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <SiMongodb color="#47A248" size={50} />
        </span> */}

      

      </div>



      <div className="space-y-6">


            {/* W3Villa Technologies */}
            <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start">
              <img src={W3villa} alt="W3villa logo" className="h-16 mb-2 mt-4" />
              <div className="text-white">
                <h2 className="leading-tight font-semibold">Software Engineer, W3Villa Technologies</h2>
                <p className="text-sm leading-tight font-thin">
                  March 2025 - Present
                </p>
                <ul className="text-sm list-disc pl-5 mt-2">
                  <li>Gained hands-on experience in front-end development using React.js, Tailwind CSS, SCSS, and Bootstrap.</li>
                  <li>Contributed to building responsive and user-friendly UI components.</li>
                  <li>Worked with version control systems like Git and participated in Agile development practices.</li>
                </ul>
              </div>
            </div>



            {/* Ministry Of Agriculture */}
            <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start">
              <img src={MinistryIcon} alt="Ministry logo" className="h-20 mb-2 mt-4 invert brightness-0" />
              <div className="text-white">
                <h2 className="leading-tight font-semibold">Web Developer, Ministry of Agriculture, Govt. of India</h2>
                <p className="text-sm leading-tight font-thin">
                  June 2024 - August 2024
                </p>
                <ul className="text-sm list-disc pl-5 mt-2">
                  <li>Contributed to the development of the homepage for a web-based agricultural data management system under the Economics & Statistics Department.</li>
                  <li>Designed and implemented front-end features using HTML, CSS, Bootstrap, and JavaScript to enhance user experience.</li>
                  <li>Focused on creating a clean and user-friendly interface for stakeholders involved in agricultural data collection and analysis.</li>
                </ul>
              </div>
            </div>


            {/* TATA MOTORS */}
            <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start">
              <img src={TataMotors} alt="Tata Motors logo" className="h-[150px] ml-[-65px] mr-[-0.5rem] mb-2 mt-[-30px]" />
              <div className="text-white">
                <h2 className="leading-tight font-semibold">Industrial Training Intern, Tata Motors</h2>
                <p className="text-sm leading-tight font-thin">
                  June 2023 - July 2023
                </p>
                <ul className="text-sm list-disc pl-5 mt-2">
                  <li>Engaged in software testing for automobile system diagnostic tools, focusing on accurate analysis of vehicle systems and components.</li>
                  <li>Gained hands-on experience with Tata Motors Diagnosis Software (TDS) to design, build, and implement automated test scripts.</li>
                  <li>Collaborated with the Software Testing team to automate critical test cases, significantly reducing the need for manual testing.</li>
                </ul>
              </div>
            </div>

            </div>




      
    </div>
  </div>
);

export default Experience;
