"use client"

import React from "react";

import Header from "@/components/Header";
import { headerMenus } from "@/components/Header/menus";

import Footer from "@/components/Footer";

import { ToggleDarkMode } from "@/components/ToggleDarkMode";
import ScrollToTop from "react-scroll-to-top";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="w-screen flex-1 h-auto overflow-x-hidden">
      <ToggleDarkMode />
      <Header menus={headerMenus} />
      {children}
      <ScrollToTop className="flex items-center justify-center"/>
      <Footer />
    </main>
  );
};

export default PageLayout;
