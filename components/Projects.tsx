import { DrawUnderlineText } from "./shared/DrawUnderlineText";
import ProjectsTab from "./tab/nav/ProjectsTab";

const Projects = () => {
  return (
    <section id="projects" className="py-12 scroll-mt-20 mb-5">
      <DrawUnderlineText text="My Projects" />
      {/* <h2 className="text-3xl font-semibold text-center text-slate-900">
        My Projects <DrawUnderlineText/>
        
      </h2> */}

      <ProjectsTab />
    </section>
  );
};

export default Projects;
