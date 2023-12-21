import React from "react";
import { ProjectHistoricProps } from "./types";

type ProjectsProps = {
  historic: ProjectHistoricProps[];
};

const Projects = ({ historic }: ProjectsProps) => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <ul>
        {historic.map((hist, idx) => (
          <li key={idx}>
            <h5>{hist.company}</h5>
            <p>{`${hist.start} - ${hist.end}`}</p>
            <p>{hist.project}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
