import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project1 from "../Assets/project1.png";
import web from "../Assets/web.png";
import admin from "../Assets/admin.png";
import ethio from "../Assets/ethio.png"

const projects = [
  {
    role: "Frontend Developer",
    company: "Tamcon Software Solutions",
    date: "May 2025 – Present",
    description:
      "I am currently working as a Frontend Developer at Tamcon on the Ethio Lottery project, where I am responsible for developing and maintaining the official lottery website using Next.js. My role involves adding new pages and features based on business requirements, optimizing existing pages for performance, accessibility, and cross-device compatibility, and ensuring a modern, responsive, and user-friendly interface. I work closely with UI designers to translate design concepts into functional web pages and collaborate with testers to identify and resolve issues for a smooth and reliable user experience. I also integrate APIs developed in Node.js and Go to display dynamic datas, while maintaining accurate content, seamless navigation, and clean, maintainable code that follows best practices in modern frontend development.",
    imageSrc: ethio,
    link: "https://www.ethiolottery.et/ ",
    name: "Ethiopian Lottery Service",
    content:
      "Digitalizing Ethiopian Lottery! We didn’t just digitize a lottery, we redefined how millions play, win, and experience luck.",
    github: "https://github.com/bettyhabtesh/ ",
  },
  {
    role: "Frontend Developer",
    company: "Awura",
    date: "Aug 2022 – Aug 2024",
    description:
      "I work on designing and developing user-friendly, responsive websites and applications with a focus on UI/UX design and modern frontend technologies.",
    imageSrc: project1,
    link: "https://awura-website.vercel.app/ ",
    name: "Awura",
    content:
      "A sleek, modern, and responsive website designed to represent Awura’s brand identity.",
    github: "https://github.com/bettyhabtesh/AwuraWebsite ",
  },
  {
    role: "UI/UX Designer and Frontend Developer",
    company: "Awura",
    date: "Aug 2022 – Aug 2024",
    description:
      "Worked on various UI/UX projects with a focus on usability and design aesthetics.",
    imageSrc: admin,
    link: "https://portal.africasjeweltour.com/ ",
    name: "Africa Jewel's Tour Admin Page",
    content:
      "The AJT Admin Portal is a management dashboard for handling tour packages, destinations, blogs, and user interactions efficiently.",
  },
  {
    role: "Content Creator",
    company: "Freelancing",
    date: "Aug 2022 – Present",
    description:
      "I create engaging content for websites and applications, focusing on audience engagement and brand storytelling.",
    imageSrc: web,
    link: "https://africasjeweltour.com/home ",
    name: "Content For Websites",
    content:
      "Created and managed content for its website and app, ensuring an engaging and informative user experience.",
  },
];

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prevIndex) => (prevIndex + 1) % projects.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  // Scroll to active project when it changes
  useEffect(() => {
    if (projectRefs.current[activeProject] && scrollContainerRef.current) {
      const activeElement = projectRefs.current[activeProject];
      const container = scrollContainerRef.current;
      
      // Calculate scroll position to center the active item
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeElement.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const elementTop = elementRect.top - containerRect.top + scrollTop;
      const elementHeight = elementRect.height;
      const containerHeight = containerRect.height;
      
      // Center the element in the container
      const targetScroll = elementTop - (containerHeight / 2) + (elementHeight / 2);
      
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [activeProject]);

  return (
    <>
      <Helmet>
        <title>Projects | Bethelhem Habtamu</title>
        <meta
          name="description"
          content="Explore a collection of UI/UX design and frontend development projects by Bethelhem Habtamu, including work on Awura, Africa Jewel's Tour, and content creation for websites."
        />
        <meta
          name="keywords"
          content="Bethelhem Habtamu, Bethelhem, frontend developer, frontend developer portfolio, frontend developer portfolio website, frontend developer in Ethiopia, Bethelhem Habtamu projects, UI/UX design, frontend development, React portfolio, Awura, Africa's Jewel Tour, web content, Tamcon, Ethiolottery"
        />
        <meta name="author" content="Bethelhem Habtamu" />
        <meta property="og:title" content="Projects | Bethelhem Habtamu" />
        <meta
          property="og:description"
          content="Portfolio of React and design projects built by Bethelhem Habtamu."
        />
        <meta property="og:image" content={projects[activeProject].imageSrc} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div
        id="projects"
        className="flex flex-col items-center bg-[#1E1A1E] text-white min-h-screen p-6 md:p-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold mt-16 mb-4">Projects .</h1>
        <p className="text-center text-gray-300 mb-8 max-w-xl md:max-w-2xl">
          As a passionate UI/UX designer and frontend developer, I have gained
          valuable skills and experience across a variety of projects.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full mt-8">
          {/* Scrollable Project List - Styled Scrollbar Added */}
          <motion.div
            ref={scrollContainerRef}
            className="flex flex-col gap-4 overflow-y-auto h-[300px] md:h-[400px] w-full md:w-1/3 pr-2 custom-scrollbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                onClick={() => setActiveProject(index)}
                className={`cursor-pointer p-4 rounded-md ${
                  activeProject === index
                    ? "bg-[#2A232A] border-l-4 border-[#F3AFF3]"
                    : "hover:bg-[#2A232A] text-gray-400"
                } transition-all duration-300`}
              >
                <h3 className="text-lg md:text-2xl">{project.role}</h3>
                <p className="text-md md:text-xl text-[#F3AFF3]">
                  {project.company}
                </p>
                <p>{project.date}</p>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Image Container with Animation */}
          <motion.div
            className="relative w-full md:w-2/3 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={projects[activeProject].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject}
                  src={projects[activeProject].imageSrc}
                  alt={"Bethelhem Habtamu"}
                  className="w-full max-w-full md:max-w-3xl h-[250px] md:h-[400px] object-fit rounded-lg"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </a>

            <div className="relative md:absolute right-0 md:right-[-2px] bg-[#2A232A] p-4 rounded-lg w-full md:w-1/3 text-left transition-all transform hover:border-[#F3AFF3] border-r-4 border-b-4 border-transparent hover:shadow-xl group mt-4 md:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg md:text-2xl font-semibold text-[#F3AFF3]">
                    {projects[activeProject].name}
                  </h3>
                  <p className="mt-2 text-gray-300">
                    {projects[activeProject].content}
                  </p>
                  <div className="mt-4 flex space-x-4 text-xl md:text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {projects[activeProject].github && (
                      <a
                        href={projects[activeProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="hover:text-[#F3AFF3] cursor-pointer"
                        />
                      </a>
                    )}
                    <a
                      href={projects[activeProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLink}
                        className="hover:text-[#F3AFF3] cursor-pointer"
                      />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Scrollbar CSS */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2a232a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f3aff3;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default ProjectsPage;