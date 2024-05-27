import { PortfolioCard } from "../components";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col justify-center gap-10 bg-cool-blue"
    >
      <div>
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Projects;
