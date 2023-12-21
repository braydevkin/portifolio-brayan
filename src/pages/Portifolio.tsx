import React from "react";

import Image from "next/image";

import PageLayout from "@/layout/PagesLayout";

import ProfileImage from "../assets/perfil.jpeg";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import { PROJECTS_HISTORIC } from "@/components/Projects/projects-historic";

const Portifolio = () => {
  return (
    <PageLayout>
      <AboutMe />
      <Projects historic={PROJECTS_HISTORIC} />
    </PageLayout>
  );
};

export default Portifolio;
