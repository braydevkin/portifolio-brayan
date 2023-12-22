import React from "react";

import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Comments from "@/components/Comments";
import Knowledges from "@/components/Knowledges";

import { PROJECTS_HISTORIC } from "@/components/Projects/projects-historic";
import { KNOWLEDGES } from "@/components/Knowledges/knowledges";

import { listComments } from "@/server/services/comment";
import CommentsContext from "@/context/CommentsContext";

type HomeProps = {
  searchParams: {
    take?: string;
    skip?: string;
  };
};

const Home = async ({ searchParams }: HomeProps) => {
  const skip = searchParams.skip ? Number(searchParams.skip) : 0;
  const take = searchParams.take ? Number(searchParams.take) : 3;

  const { comments, total } = await listComments({ skip, take });

  return (
    <>
      <AboutMe />
      <Projects historic={PROJECTS_HISTORIC} />
      <Knowledges knowledges={KNOWLEDGES} />
      <CommentsContext
        defaultComments={comments}
        defaultCommentsPagination={{ total, skip, take }}
      >
        <Comments />
      </CommentsContext>
    </>
  );
};

export default Home;
