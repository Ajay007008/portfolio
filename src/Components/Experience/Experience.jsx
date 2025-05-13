import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import W3villa from "../../assets/w3villa.png";
import MinistryIcon from "../../assets/MoAFfinal.png";
import TataMotors from "../../assets/TataMotors.png";

const Experience = () => (
  <div id="Experience" className="p-6 sm:p-10 md:p-24">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mb-6">Experience</h1>
    
    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
      {/* Skill Icons */}
      <div className="flex flex-wrap justify-center gap-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaHtml5 color="#E34F26" size={40} />
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaCss3 color="#1572B6" size={40} />
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaReact color="#61DAFB" size={40} />
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaJs color="#F7DF1E" size={40} />
        </span>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6 md:w-3/5 lg:w-2/3">
        {/* W3Villa Technologies */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start">
          <img src={W3villa} alt="W3villa logo" className="h-16 sm:h-20 mb-2 mt-4" />
          <div className="text-white">
            <h2 className="leading-tight font-semibold text-lg sm:text-xl">Software Engineer, W3Villa Technologies</h2>
            <p className="text-sm sm:text-base leading-tight font-thin">March 2025 - Present</p>
            <ul className="text-sm sm:text-base list-disc pl-5 mt-2">
              <li>Gained hands-on experience in front-end development using React.js, Tailwind CSS, SCSS, and Bootstrap.</li>
              <li>Contributed to building responsive and user-friendly UI components.</li>
              <li>Worked with version control systems like Git and participated in Agile development practices.</li>
            </ul>
          </div>
        </div>

        {/* Ministry Of Agriculture */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start">
          <img src={MinistryIcon} alt="Ministry logo" className="h-20 sm:h-24 mb-2 mt-4 invert brightness-0" />
          <div className="text-white">
            <h2 className="leading-tight font-semibold text-lg sm:text-xl">Web Developer, Ministry of Agriculture, Govt. of India</h2>
            <p className="text-sm sm:text-base leading-tight font-thin">June 2024 - August 2024</p>
            <ul className="text-sm sm:text-base list-disc pl-5 mt-2">
              <li>Contributed to the development of the homepage for a web-based agricultural data management system.</li>
              <li>Designed and implemented front-end features using HTML, CSS, Bootstrap, and JavaScript.</li>
              <li>Created a clean and user-friendly interface for agricultural data collection and analysis.</li>
            </ul>
          </div>
        </div>

        {/* TATA MOTORS */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start">
          <img src={TataMotors} alt="Tata Motors logo" className="h-[150px] sm:h-[180px] ml-[-65px] sm:ml-0 mb-2 mt-[-30px] sm:mt-0" />
          <div className="text-white">
            <h2 className="leading-tight font-semibold text-lg sm:text-xl">Industrial Training Intern, Tata Motors</h2>
            <p className="text-sm sm:text-base leading-tight font-thin">June 2023 - July 2023</p>
            <ul className="text-sm sm:text-base list-disc pl-5 mt-2">
              <li>Engaged in software testing for automobile system diagnostic tools.</li>
              <li>Worked with Tata Motors Diagnosis Software (TDS) to design, build, and implement automated test scripts.</li>
              <li>Automated critical test cases, reducing the need for manual testing.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
