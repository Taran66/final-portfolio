import React, { useState } from 'react';

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('skills');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-black min-h-screen py-16 md:py-24 flex justify-center items-center px-4 md:px-6">
      <div className="max-container relative flex flex-col gap-10 md:gap-20">
        {/* Title Section */}
        <div className="flex justify-center relative">
          <a href="#AboutMe">
            <h2 className="text-slate-800 text-5xl md:text-6xl lg:text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">
              About Me
            </h2>
          </a>
          <h3 className="text-center text-amber-400 z-20 text-2xl md:text-3xl lg:text-4xl absolute top-0">
            About Me
          </h3>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Image */}
          <img 
            src="../src/assets/AboutMe.svg" 
            alt="About Me" 
            className="w-full lg:w-[550px] h-auto rounded-2xl mx-auto lg:mx-0"
          />

          {/* Text Content */}
          <div className="flex flex-col gap-6 md:gap-10 bg-slate-900 p-6 md:p-10 rounded-2xl border-2 border-slate-800">
            <p className="text-white text-justify text-base md:text-lg ">
              As a frontend developer, I specialize in creating visually appealing and user-friendly web interfaces. With expertise in React and Tailwind CSS, I craft responsive and modern designs that enhance user experience. Proficient in Git version control, I collaborate seamlessly with teams. Additionally, my basic Node.js knowledge allows me to integrate frontend components with backend functionality seamlessly. Driven by a passion for coding and a commitment to delivering high-quality work, I constantly strive to push the boundaries of web development.
            </p>

            {/* Navigation Tabs */}
            <ul className="flex gap-6 md:gap-10 text-white text-xl md:text-2xl font-bold">
              <li
                className={`hover:text-amber-400 ${
                  activeSection === 'skills' ? 'text-amber-400' : ''
                } cursor-pointer`}
                onClick={() => handleSectionClick('skills')}
              >
                Skills
              </li>
              <li
                className={`hover:text-amber-400 ${
                  activeSection === 'technologies' ? 'text-amber-400' : ''
                } cursor-pointer`}
                onClick={() => handleSectionClick('technologies')}
              >
                Technologies
              </li>
            </ul>

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <ul className="flex flex-col md:flex-row gap-6 md:gap-10">
                <li className="text-white flex flex-col gap-4 w-full md:w-1/2 text-justify">
                  <h6 className="text-amber-400 text-lg md:text-xl font-medium">Web Development</h6>
                  <p className="text-sm md:text-base">
                    Experience in Frontend Development and passionate about
                    fullstack web development. Proficient in HTML, CSS and
                    Javascript and also in CSS framework Tailwind.
                  </p>
                </li>
                <li className="text-white flex flex-col gap-4 w-full md:w-1/2 text-justify">
                  <h6 className="text-amber-400 text-lg md:text-xl font-medium">UX/UI</h6>
                  <p className="text-sm md:text-base">
                    Building design for Websites and Webpages. Well familiar with
                    Figma and Canva graphic design softwares.
                  </p>
                </li>
              </ul>
            )}

            {/* Technologies Section */}
            {activeSection === 'technologies' && (
              <ul className="flex flex-col md:flex-row gap-6 md:gap-10">
                <li className="text-white flex flex-col gap-4 w-full md:w-1/2 text-justify">
                  <h6 className="text-amber-400 text-lg md:text-xl font-medium">React</h6>
                  <p className="text-sm md:text-base">
                    As a proficient React.js and JavaScript developer, I have honed my skills in building dynamic, interactive, and scalable web applications that deliver seamless user experiences.
                  </p>
                </li>
                <li className="text-white flex flex-col gap-4 w-full md:w-1/2 text-justify">
                  <h6 className="text-amber-400 text-lg md:text-xl font-medium">Tailwind</h6>
                  <p className="text-sm md:text-base">
                    Proficient in using Tailwind CSS and also in other CSS frameworks like Bootstrap and Material UI
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;