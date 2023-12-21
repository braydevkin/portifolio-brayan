import React from "react";

import Header from "@/components/Header";
import { headerMenus } from "@/components/Header/menus";

import Footer from "@/components/Footer";

import { ToggleDarkMode } from "@/components/ToggleDarkMode";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="max-h-screen w-screen">
      <ToggleDarkMode />
      <Header menus={headerMenus} />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
