import React from "react";
import avatarImg from "../../assets/123.jpeg";
import TextChange from "../TextChange";
import resumePdf from "../Home/resume2024.pdf"  // Path to your PDF file

const Home = () => {
  const handleContactMeClick = () => {
    // Open the PDF in a new tab
    window.open(resumePdf, "_blank");
  };

  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 md:p-20" id="Home">
      {/* Left Content */}
      <div className="w-full md:w-1/2 pt-10 md:pt-0 text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold leading-snug tracking-tight">
          <TextChange />
        </h1>

        <p className="text-sm md:text-xl tracking-tight mt-6">
          I'm Ajay Singh, a full-stack developer skilled in React, Node.js, C++, and SQL.
          I'm passionate about building efficient, user-friendly web applications and constantly exploring new technologies to enhance my development skills.
        </p>

        <button
          onClick={handleContactMeClick}
          className="mt-6 text-white text-sm md:text-lg py-2 px-5 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>

      {/* Avatar Image */}
      <div className="mb-8 md:mb-0">
        <img
          src={avatarImg}
          alt="avatar"
          className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover mx-auto md:mx-0 shadow-lg shadow-indigo-500/50 animate-shadowPulse"
        />
      </div>
    </div>
  );
};

export default Home;
