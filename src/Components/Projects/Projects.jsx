import React from "react";
import ProjectCard from "./ProjectCard";
import HoliBanner from "../Projects/HoliBanner.png";
import SwiggyBanner from "../Projects/swiggy-clone3.png";
import AdminDashboard from "../Projects/AdminDashBoard.png";
import Tastyburger from "../Projects/tastyBurger.png";
import ShoppingCart from "../Projects/shoppingCart.png";
import YoutubeSummarizer from "../Projects/youtubeSummarizer.png"

const Projects = () => {
  return (
    <div id="Projects" className="px-4 sm:px-6 md:px-10 lg:px-24 py-12 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Projects</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Holi-Leela Website"
          img={HoliBanner}
          points={[
            "Designed and developed an interactive festival-themed website for Holi Leela.",
            "Showcased event details, cultural highlights, and celebrations.",
            "Integrated Framer Motion for smooth animations and transitions, enhancing the overall user experience.",
          ]}
          demoLink="https://holi-leela-website.vercel.app/"
          sourceCodeLink="https://github.com/Ajay007008/Holi-Leela-Website"
        />

        <ProjectCard
          title="Swiggy Clone"
          img={SwiggyBanner}
          points={[
            "Developed the frontend of a Swiggy-inspired food delivery platform using React.js.",
            "Built with modern, responsive, and interactive UI practices.",
            "Used reusable components, dynamic routing with React Router.",
            "Implemented state management with React hooks for seamless data handling.",
          ]}
          demoLink="https://github.com/Ajay007008/swiggy-clone-website"
          sourceCodeLink="https://github.com/Ajay007008/swiggy-clone-website"
        />

        <ProjectCard
          title="Admin Dashboard"
          img={AdminDashboard}
          points={[
            "Built a responsive and feature-rich Admin Dashboard using React.js.",
            "Utilized SCSS for modular and maintainable styling.",
            "Enabled advanced layout customizations and theme management.",
            "Used Context API for global state management — theme toggles, auth states, sidebar control.",
          ]}
          demoLink="https://admin-dashboard-flame-kappa.vercel.app/"
          sourceCodeLink="https://github.com/Ajay007008/admin-dashboard"
        />

        <ProjectCard
          title="Burger Restaurant Website"
          img={Tastyburger}
          points={[
            "A modern and visually appealing burger restaurant website built using React, Tailwind CSS, and Sass.",
            "Developed a fully responsive frontend using React.js for component-based architecture.",
            "Implemented smooth scrolling and modern layout techniques for better UX.",
          ]}
          demoLink="https://react-bootstrap-tasty-burger.vercel.app/"
          sourceCodeLink="https://github.com/Ajay007008/ReactBootstrapTastyBurger"
        />

        <ProjectCard
          title="Shopping Cart"
          img={ShoppingCart}
          points={[
            "Built a responsive e-commerce furniture store using React and Redux Toolkit.",
            "Created shopping cart features: add, update, remove items with localStorage support.",
            "Used TailwindCSS for a modern, responsive UI.",
            "Managed global UI states like cart toggle using Redux."
          ]}
          demoLink="https://react-shopping-cart-hazel-eight.vercel.app/"
          sourceCodeLink="https://github.com/Ajay007008/React-Shopping-Cart"
        />

        <ProjectCard
          title="YouTube Summarizer"
          img={YoutubeSummarizer}
          points={[
            "Created a YouTube video summarization extension using Flask and NLP models.",
            "Extracted video transcripts via YouTube Transcript API.",
            "Generated coherent summaries using Hugging Face Transformers."
          ]}
          demoLink="https://github.com/Ajay007008/Youtube-Video-Summarizer"
          sourceCodeLink="https://github.com/Ajay007008/Youtube-Video-Summarizer"
        />
      </div>
    </div>
  );
};

export default Projects;
