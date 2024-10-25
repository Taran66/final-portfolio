import { useState } from "react";
import { Project } from "../constants";
import "animate.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen py-16 md:py-24 flex justify-center items-center px-4 md:px-6">
      <div className="max-container relative w-full">
        <div className="flex flex-col gap-10 md:gap-20">
          {/* Title Section */}
          <div className="flex justify-center relative">
            <a href="#Projects">
              <h2 className="text-slate-800 text-5xl md:text-6xl lg:text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">
                Projects
              </h2>
            </a>
            <h3 className="text-center text-amber-400 z-20 text-2xl md:text-3xl lg:text-4xl absolute top-0">
              Projects
            </h3>
          </div>

          {/* Project Details View */}
          {selectedProject ? (
            <div className="flex flex-col items-center gap-6 md:gap-10 bg-slate-900 p-6 md:p-10 rounded-3xl shadow-2xl border-2 border-slate-800 text-white animate__animated animate__fadeIn">
              <div className="w-full overflow-hidden rounded-xl ">
              </div>    
              <h2 className="text-amber-400 text-2xl md:text-3xl font-semibold">
                {selectedProject.projectName}
              </h2>
              <div className="flex flex-col gap-20">
              <p className="text-base md:text-lg text-center">
                {selectedProject.description}
              </p>
              <video className="" src={selectedProject.video}
              controls autoPlay>

              </video>
              </div>
              <button
                onClick={handleBackToProjects}
                className="mt-4 bg-amber-400 text-black rounded-md px-4 py-2 text-lg hover:bg-amber-500 transition-colors"
              >
                Back to Projects
              </button>
            </div>
          ) : (
            // Projects Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-20 justify-center">
              {Project.map((item) => (
                <div 
                  key={item.projectName}
                  className="flex flex-col justify-between items-center gap-6 md:gap-10 bg-slate-900 p-6 md:p-10 rounded-3xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ease-in-out hover:scale-105 border-2 border-slate-800 cursor-pointer"
                  onClick={() => handleProjectClick(item)}
                >
                  <div className="w-full overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.projectName}
                      className="w-full h-auto object-cover transition-transform duration-300"
                    />
                  </div>
                  <h6 className="text-amber-400 text-xl md:text-2xl font-semibold text-center">
                    {item.projectName}
                  </h6>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

