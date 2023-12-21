import React from "react";

import Header from "@/components/Header";
import { headerMenus } from "@/components/Header/menus";

import Footer from "@/components/Footer";
import { ToggleDarkMode } from "@/components/ToggleDarkMode";

export const AboutMe: React.FC = () => {
  return (
    <>
      <ToggleDarkMode />
      <Header menus={headerMenus} />
      <Footer />
    </>
  );
};
