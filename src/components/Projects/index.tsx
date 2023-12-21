"use client";

import React from "react";
import { ProjectHistoricProps } from "./types";

type ProjectsProps = {
  historic: ProjectHistoricProps[];
};

const Projects = ({ historic }: ProjectsProps) => {
  return (
    <section id="projects" className="w-full h-auto px-4 py-6 mt-12">
      <h1 className="font-bold italic px-4">Projects</h1>
      <ul className="w-full  mt-4 grid grid-cols-1 lg:grid-cols-2">
        {historic.map((hist, idx) => (
          <li key={idx} className="space-y-2 px-4 border-b-2 py-4 ">
            <h5 className="font-bold">{hist.company}</h5>
            <p className=" text-sm font-semibold ">{hist.position}</p>
            <p className=" text-sm font-semibold">
              {idx + 1}. {hist.project}
            </p>
            <p className="text-sm ">{`${hist.start} - ${hist.end}`}</p>
            <ul>
              {hist.activities.map((activity, idx) => (
                <li key={idx} className="text-sm text-justify my-2">
                  - {activity.detail}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
