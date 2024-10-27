import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral pb-4">
      <h2 className="my-20 text-center text-4xl font-bold text-purple-400">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-xs rounded-lg bg-neutral-800 shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 h-40 w-full rounded-md object-cover"
            />
            <h6 className="mb-2 text-lg font-semibold text-purple-400">{project.title}</h6>
            <p className="mb-4 text-neutral-400 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-gray-200 px-2 py-1 text-xs font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
