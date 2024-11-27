import "./portfolio.css";
import ProjectsCategories from "./ProjectsCategories";
import Projects from "./Projects";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const uniqueCategories = [
    "all",
    ...new Set(data.map((item) => item.category)),
  ];

  const filterProjectHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectHandler} />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
