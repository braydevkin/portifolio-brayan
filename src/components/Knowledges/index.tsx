"use client";

import React from "react";
import { Progress } from "../ui/progress";
import { KnowledgesItem } from "./types";

type KnowledgesProps = {
  knowledges: KnowledgesItem[];
};

const Knowledges = ({ knowledges }: KnowledgesProps) => {
  return (
    <section id="knowledges" className="w-full h-auto px-4 py-6 mt-12">
      <h1 className="font-bold italic px-4">Knowledges</h1>
      <p className="text-sm italic px-4">
        Here I describe in percentages what I consider to be my strongest points
      </p>
      <div className=" w-full lg:grid lg:grid-cols-2">
        {knowledges.map((k, idx) => (
          <div key={idx} className="w-full  mt-8 px-4">
            <p>{k.title}</p>
            <div className="w-full flex flex-row items-center space-x-3">
              <Progress value={k.percentageOfDominance} className="w-[80%]" />
              <span className="font-bold">{k.percentageOfDominance}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Knowledges;
