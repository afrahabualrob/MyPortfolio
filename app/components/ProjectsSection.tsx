import { useState } from "react";
import {
  LinkIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { projectsList } from "../data/projectsList";

const ITEMS_PER_PAGE = 3;

const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const showMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, projectsList.length)
    );
  };

  const showLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const allShown = visibleCount >= projectsList.length;

  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-16 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-cyan-700 mb-3 font-mono">
            Projects
          </h2>
          <p className="text-lg font-medium text-gray-600">
            Featured projects that highlight my problem-solving skills,
            technical expertise, and attention to detail — most of them are
            real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="border border-stone-100 rounded-lg p-6 text-center shadow-lg"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                {project.type.includes("Mobile") ? (
                  <DevicePhoneMobileIcon className="w-6 h-6 text-cyan-600" />
                ) : (
                  <GlobeAltIcon className="w-6 h-6 text-cyan-600" />
                )}
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-stone-400 font-semibold mb-2 font-mono">
                {project.type}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2
                             text-sm text-gray-700 hover:text-cyan-700 transition"
                >
                  <LinkIcon className="w-4 h-4" />
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {!allShown ? (
            <button
              onClick={showMore}
              className=" rounded-full 
              bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-800 
              hover:scale-105 hover:shadow-md
              text-white px-6 py-2 transition float-right font-semibold"
            >
              Show more
            </button>
          ) : (
            <button
              onClick={showLess}
              className="rounded-full bg-gradient-to-r from-stone-200 to-stone-500
                       px-8 py-3 text-sm font-semibold text-gray-800
                       transition hover:scale-105 hover:shadow-md"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
