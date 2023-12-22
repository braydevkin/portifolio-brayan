import React from "react";

import AboutMe from "@/components/AboutMe";

import Projects from "@/components/Projects";
import Comments from "@/components/Comments";
import Knowledges from "@/components/Knowledges";

import { PROJECTS_HISTORIC } from "@/components/Projects/projects-historic";
import { KNOWLEDGES } from "@/components/Knowledges/knowledges";
import { listComments } from "@/server/services/comment";

const Home = async () => {
  const { comments } = await listComments({ skip: 1, take: 10 });
  return (
    <>
      <AboutMe />
      <Projects historic={PROJECTS_HISTORIC} />
      <Knowledges knowledges={KNOWLEDGES} />
      <Comments comments={comments} />
    </>
  );
};

export default Home;
