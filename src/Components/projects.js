import React, { useState } from "react";
import project1 from "../Assets/project1.png";
const projects = [
  {
    role: "Frontend Developer",
    company: "Awura Tech",
    date: "Aug 2022 – Present",
    description: "I work on designing and developing user-friendly, responsive websites and applications with a focus on UI/UX design and modern frontend technologies.",
    imageSrc: {project1},
    link: "https://awura-tech.com",
  },
  {
    role: "UI/UX Designer",
    company: "Company 2",
    date: "Jan 2021 – Jul 2022",
    description: "Worked on various UI/UX projects with a focus on usability and design aesthetics.",
    imageSrc: "/path/to/your/image2.png",
    link: "https://company2.com",
  },
  {
    role: "Web Developer",
    company: "Company 3",
    date: "Jul 2020 – Dec 2020",
    description: "Developed and maintained websites using the latest web technologies.",
    imageSrc: "/path/to/your/image3.png",
    link: "https://company3.com",
  },
];

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-center mb-8">
        As a passionate UI/UX designer and frontend developer, I have gained valuable skills and experience across a variety of projects.
      </p>

      <div className="flex flex-row gap-8 w-full">
        {/* Left Side - Scrollable Text */}
        <div className="flex flex-col gap-4 overflow-y-scroll h-96 p-4 bg-gray-800 rounded-lg w-1/3">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(index)}
              className={`cursor-pointer ${activeProject === index ? "text-purple-400" : "text-gray-400"} hover:text-purple-400 transition duration-300`}
            >
              <h3 className="text-xl font-semibold">{project.role}</h3>
              <p className="text-sm">{project.company}</p>
              <p className="text-xs">{project.date}</p>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Image with Hover Icons */}
        <div className="relative w-2/3">
          <a href={projects[activeProject].link} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full">
            <img
              src={projects[activeProject].imageSrc}
              alt={projects[activeProject].role}
              className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-4 text-2xl text-white">
                <i className="fab fa-github hover:text-purple-400 cursor-pointer"></i>
                <i className="fas fa-link hover:text-purple-400 cursor-pointer"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
