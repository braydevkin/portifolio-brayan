import type { Metadata } from "next";

import "./globals.css";

import { DarkThemeProvider } from "@/layout/DarkThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import PageLayout from "@/layout/PagesLayout";

export const metadata: Metadata = {
  title: "Portifolio Brayan Divbrands",
  description: "Project created for technical evaluation.",
  authors: [{ name: "Brayan Quirino", url: "https://github.com/braydevkin" }],
  openGraph: {
    title: "Portifolio Brayan Divbrands",
    description: "Project created for technical evaluation.",
    url: "https://portifolio-brayan-divbrands.vercel.app/",
    siteName: "Portifolio Brayan Divbrands",
    images: [
      {
        url: "./assets/perfil.jpeg",
        width: 260,
        height: 100,
      },
    ],
    locale: 'en-EN'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html className="scroll-smooth" lang="en" suppressHydrationWarning>
        <head />
        <body>
          <DarkThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageLayout>{children}</PageLayout>
            <Toaster />
          </DarkThemeProvider>
        </body>
      </html>
    </>
  );
}
